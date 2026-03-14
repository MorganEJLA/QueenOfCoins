import { majorArcana } from "@/constants/tarotCards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
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
  return (
    <View style={styles.slideContent}>
      <Text style={styles.slideLabel}>You Are Ready</Text>
      <Text style={styles.bodyText}>
        Each morning, open the app and draw your card. Let it guide your day.
      </Text>
      <TouchableOpacity style={styles.beginButton} onPress={onComplete}>
        <Text style={styles.beginButtonText}>Begin</Text>
      </TouchableOpacity>
    </View>
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
});
