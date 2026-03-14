import { MovementPreference } from "@/constants/movementData";
import { majorArcana } from "@/constants/tarotCards";
import { useCard } from "@/context/CardContext";
import {
  cancelNotifications,
  requestNotificationPermission,
  scheduleDailyNotification,
} from "@/utils/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardIcon from "../components/CardIcon";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";

const { width, height } = Dimensions.get("window");
const ONBOARDING_KEY = "qoc_onboarding_complete";

export default function Onboarding() {
  const [fontsLoaded] = useFonts(fonts);
  const [slide, setSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current; // also fix useReft → useRef
  const randomCard =
    majorArcana[Math.floor(Math.random() * majorArcana.length)];

  useEffect(() => {
    fadeIn();
  }, [slide]);

  function fadeIn() {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeToNext() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setSlide((prev) => prev + 1);
    });
  }

  async function completeOnboarding() {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
    router.replace("/");
  }

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide, { opacity: fadeAnim }]}>
        {slide === 0 && <SlideOne onNext={fadeToNext} />}
        {slide === 1 && <SlideTwo onNext={fadeToNext} />}
        {slide === 2 && <SlideThree onNext={fadeToNext} card={randomCard} />}
        {slide === 3 && <SlideFour onComplete={completeOnboarding} />}
      </Animated.View>
    </View>
  );
} // ← this closing brace ends Onboarding
function SlideOne({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.slideContent}>
      <Text style={styles.wordmark}>Queen of Coins</Text>
      <View style={styles.divider} />
      <Text style={styles.tagline}>A daily practice.</Text>
      <Text style={styles.tagline}>Anchored in tarot.</Text>
      <TouchableOpacity style={styles.ghostButton} onPress={onNext}>
        <Text style={styles.ghostButtonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

function SlideTwo({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.slideContent}>
      <Text style={styles.slideLabel}>The Ritual</Text>
      <View style={styles.pillars}>
        <Text style={styles.pillarText}>A card drawn each morning.</Text>
        <Text style={styles.pillarText}>A moment to set your intention.</Text>
        <Text style={styles.pillarText}>A prompt for work and creativity.</Text>
        <Text style={styles.pillarText}>A movement to ground your body.</Text>
      </View>
      <TouchableOpacity style={styles.ghostButton} onPress={onNext}>
        <Text style={styles.ghostButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

function SlideThree({ onNext, card }: { onNext: () => void; card: any }) {
  return (
    <View style={styles.slideContent}>
      <Text style={styles.slideLabel}>Your Card Awaits</Text>
      <View style={styles.cardIconWrap}>
        <CardIcon id={card.id} size={96} />
      </View>
      <Text style={styles.cardName}>{card.name}</Text>
      <Text style={styles.cardTagline}>{card.tagline}</Text>
      <TouchableOpacity style={styles.ghostButton} onPress={onNext}>
        <Text style={styles.ghostButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

function SlideFour({ onComplete }: { onComplete: () => void }) {
  const { setMovementPreference } = useCard();
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const movementOptions = [
    "Walking",
    "Running",
    "Aerobics",
    "Dance",
    "Pilates",
    "Yoga",
    "Swimming",
    "Weights",
    "Bodyweight",
    "Tai Chi",
  ];

  const handleMovementSelect = (option: string) => {
    setSelectedMovement(option);
    setMovementPreference(option as MovementPreference);
  };

  const handleNotificationToggle = async (value: boolean) => {
    if (value) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setNotificationsEnabled(true);
        await scheduleDailyNotification(8, 0);
      }
    } else {
      setNotificationsEnabled(false);
      await cancelNotifications();
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.slideFourContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.slideLabel}>Make It Yours</Text>
      <Text style={styles.bodyText}>
        Choose how you move and when you want your daily reminder.
      </Text>

      <Text style={styles.slideSectionLabel}>Movement Preference</Text>
      <View style={styles.optionGrid}>
        {movementOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionChip,
              selectedMovement === option && styles.optionChipSelected,
            ]}
            onPress={() => handleMovementSelect(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedMovement === option && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.slideSectionLabel}>Daily Reminder</Text>
      <View style={styles.notificationRow}>
        <Text style={styles.notificationLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationToggle}
          trackColor={{ false: "rgba(245,237,214,0.1)", true: Colors.deepTeal }}
          thumbColor={
            notificationsEnabled ? Colors.gold : "rgba(245,237,214,0.4)"
          }
        />
      </View>
      <Text style={styles.notificationHint}>
        You can change this anytime in Settings.
      </Text>

      <TouchableOpacity style={styles.beginButton} onPress={onComplete}>
        <Text style={styles.beginButtonText}>Begin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width,
  },
  slideContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 20,
  },
  wordmark: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 13,
    color: "rgba(201,168,76,0.6)",
    letterSpacing: 6,
    textTransform: "uppercase",
    textAlign: "center",
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: "rgba(201,168,76,0.3)",
  },
  tagline: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 28,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  slideLabel: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: Colors.peacock,
    letterSpacing: 5,
    textTransform: "uppercase",
    textAlign: "center",
  },
  pillars: {
    gap: 12,
    alignItems: "center",
  },
  pillarText: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 16,
    color: "rgba(245,237,214,0.7)",
    textAlign: "center",
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.ink,
  },
  cardIconWrap: {
    padding: 32,
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.2)",
    backgroundColor: "rgba(201,168,76,0.03)",
  },
  cardName: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 20,
    color: Colors.cream,
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: "center",
  },
  cardTagline: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 14,
    color: "rgba(201,168,76,0.6)",
    textAlign: "center",
    letterSpacing: 1,
  },
  bodyText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 15,
    color: "rgba(245,237,214,0.6)",
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 1,
  },
  ghostButton: {
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.3)",
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  ghostButtonText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(201,168,76,0.6)",
    letterSpacing: 5,
    textTransform: "uppercase",
  },
  beginButton: {
    borderWidth: 1,
    borderColor: Colors.gold,
    backgroundColor: "rgba(201,168,76,0.08)",
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginTop: 20,
  },
  beginButtonText: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 13,
    color: Colors.gold,
    letterSpacing: 5,
    textTransform: "uppercase",
  },
  slideFourContent: {
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 80,
    paddingBottom: 60,
    gap: 16,
  },
  slideSectionLabel: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 11,
    color: Colors.peacock,
    letterSpacing: 4,
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginTop: 8,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignSelf: "stretch",
  },
  optionChip: {
    borderWidth: 1,
    borderColor: "rgba(245,237,214,0.2)",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  optionChipSelected: {
    borderColor: Colors.gold,
    backgroundColor: "rgba(201,168,76,0.1)",
  },
  optionText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(245,237,214,0.5)",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  optionTextSelected: {
    color: Colors.gold,
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  notificationLabel: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  notificationHint: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 11,
    color: "rgba(245,237,214,0.3)",
    letterSpacing: 1,
    alignSelf: "flex-start",
  },
});
