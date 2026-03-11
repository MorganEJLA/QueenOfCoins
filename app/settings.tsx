import { useFonts } from "expo-font";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { MovementPreference } from "../constants/movementData";
import { useCard } from "../context/CardContext";
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

export default function Settings() {
  const [fontsLoaded] = useFonts(fonts);
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);
  const { setMovementPreference } = useCard();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.pageTitle}>Settings</Text>
      <View style={styles.divider} />

      <ScrollView showsVerticalScrollIndicator={false}>
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
            from the Major Arcana — offering a morning practice, work approach,
            creative prompt, and movement for the day.
          </Text>
          <Text style={styles.aboutVersion}>Version 1.0 · Major Arcana</Text>
        </View>

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
  },
  sectionLabel: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 9,
    color: "rgba(45,140,140,0.8)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 12,
    color: "rgba(201,168,76,0.5)",
    letterSpacing: 1,
    marginBottom: 16,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 32,
  },
  optionChip: {
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.2)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(201,168,76,0.03)",
  },
  optionChipSelected: {
    borderColor: "rgba(201,168,76,0.7)",
    backgroundColor: "rgba(201,168,76,0.12)",
  },
  optionText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(245,237,214,0.4)",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  optionTextSelected: {
    color: Colors.gold,
  },
  aboutBlock: {
    gap: 12,
  },
  aboutTitle: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 16,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  aboutText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 13,
    color: "rgba(245,237,214,0.6)",
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  aboutVersion: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 10,
    color: "rgba(201,168,76,0.35)",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
});
