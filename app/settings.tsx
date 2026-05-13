import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { MovementPreference } from "../constants/movementData";
import { useCard } from "../context/CardContext";
import {
  cancelNotifications,
  requestNotificationPermission,
  scheduleDailyNotification,
} from "../utils/notifications";

const movementOptions = [
  "Walking",
  "Running",
  "Capoeira",
  "Dance",
  "Pilates",
  "Yoga",
  "Swimming",
  "Weights",
  "Bodyweight",
  "Tai Chi",
];

export default function Settings() {
  const [fontsLoaded] = useFonts(fonts);
  const { movementPreference, setMovementPreference, pullCard } = useCard();
  const [selectedMovement, setSelectedMovement] = useState<string | null>(
    movementPreference,
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationTime, setNotificationTime] = useState(
    new Date(new Date().setHours(8, 0, 0, 0)),
  );

  useEffect(() => {
    setSelectedMovement(movementPreference);
  }, [movementPreference]);

  useEffect(() => {
    async function loadNotificationSettings() {
      try {
        const savedEnabled = await AsyncStorage.getItem(
          "qoc_notifications_enabled",
        );
        const savedTime = await AsyncStorage.getItem("qoc_notification_time");

        if (savedEnabled === "true") {
          setNotificationsEnabled(true);
          if (savedTime) {
            const date = new Date(savedTime);
            setNotificationTime(date);
          }
        }
      } catch (e) {
        console.log("Failed to load notification settings", e);
      }
    }
    loadNotificationSettings();
  }, []);

  if (!fontsLoaded) return null;

  const handleNotificationToggle = async (value: boolean) => {
    if (value) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setNotificationsEnabled(true);
        await AsyncStorage.setItem("qoc_notifications_enabled", "true");
        await scheduleDailyNotification(
          notificationTime.getHours(),
          notificationTime.getMinutes(),
        );
      }
    } else {
      setNotificationsEnabled(false);
      await AsyncStorage.setItem("qoc_notifications_enabled", "false");
      await cancelNotifications();
    }
  };

  const handleTimeChange = async (_: any, selectedDate?: Date) => {
    if (!selectedDate) return;
    setNotificationTime(selectedDate);
    await AsyncStorage.setItem(
      "qoc_notification_time",
      selectedDate.toISOString(),
    );
    if (notificationsEnabled) {
      await scheduleDailyNotification(
        selectedDate.getHours(),
        selectedDate.getMinutes(),
      );
    }
  };
  const clearToday = async () => {
    await AsyncStorage.removeItem("qoc_card_date");
    await AsyncStorage.removeItem("qoc_current_card");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.pageTitle}>Settings</Text>
      <View style={styles.divider} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Notifications */}
        <Text style={styles.sectionLabel}>Daily Reminder</Text>
        <Text style={styles.sectionSubtitle}>
          A morning prompt to pull your card.
        </Text>
        <View style={styles.notificationRow}>
          <Text style={styles.notificationLabel}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationToggle}
            trackColor={{
              false: "rgba(245,237,214,0.1)",
              true: Colors.deepTeal,
            }}
            thumbColor={
              notificationsEnabled ? Colors.gold : "rgba(245,237,214,0.4)"
            }
          />
        </View>

        {notificationsEnabled && (
          <View style={styles.timePickerWrap}>
            <Text style={styles.timeLabel}>Remind me at</Text>
            <DateTimePicker
              value={notificationTime}
              mode="time"
              display="spinner"
              onChange={handleTimeChange}
              textColor={Colors.cream}
              style={styles.timePicker}
            />
          </View>
        )}

        <View style={styles.divider} />

        {/* Movement Preference */}
        <Text style={styles.sectionLabel}>Movement Preference</Text>
        <Text style={styles.sectionSubtitle}>
          Your daily ritual will draw from this practice.
        </Text>
        <View style={styles.optionGrid}>
          {movementOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionChip,
                selectedMovement === option && styles.optionChipSelected,
              ]}
              onPress={() => {
                setSelectedMovement(option);
                setMovementPreference(option as MovementPreference);
              }}
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

        <View style={styles.divider} />

        {/* About */}
        <Text style={styles.sectionLabel}>About</Text>
        <View style={styles.aboutBlock}>
          <Text style={styles.aboutTitle}>Queen of Coins</Text>
          <Text style={styles.aboutText}>
            A daily ritual app anchored in tarot. Each morning a card is drawn
            from the full 78-card deck — offering a morning practice, work
            approach, creative prompt, and movement for the day.
          </Text>
          <Text style={styles.aboutVersion}>Version 2.0 · Full Deck</Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity onPress={clearToday} style={styles.devButton}>
          <Text style={styles.devButtonText}>DEV: Reset Today's Card</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ink,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  wordmark: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(201,168,76,0.5)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center",
  },
  pageTitle: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 28,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(201,168,76,0.15)",
    marginBottom: 24,
    marginTop: 8,
  },
  sectionLabel: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 11,
    color: Colors.peacock,
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 13,
    color: "rgba(245,237,214,0.5)",
    marginBottom: 16,
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  notificationLabel: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  timePickerWrap: {
    marginBottom: 16,
  },
  timeLabel: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(245,237,214,0.4)",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  timePicker: {
    height: 120,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
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
  aboutBlock: {
    gap: 10,
    marginBottom: 16,
  },
  aboutTitle: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 18,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  aboutText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 13,
    color: "rgba(245,237,214,0.6)",
    lineHeight: 22,
  },
  aboutVersion: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: Colors.peacock,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  devButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(245,237,214,0.2)",
    alignItems: "center",
    marginBottom: 12,
  },
  devButtonText: {
    color: "rgba(245,237,214,0.4)",
    fontFamily: "JosefinSans_300Light",
    fontSize: 12,
  },
});
