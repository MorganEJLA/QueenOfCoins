import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardIcon from "../components/CardIcon";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { useCard } from "../context/CardContext";

export default function Ritual() {
  const [checked, setChecked] = useState({
    tarot: true,
    morning: false,
    work: false,
    creative: false,
    movement: false,
  });
  const { currentCard } = useCard();
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>← Today</Text>
        </TouchableOpacity>
        <View style={styles.badge}>
          <CardIcon id={currentCard.id} size={16} />
          <Text style={styles.badgeText}>{currentCard.name}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Today{"'"}s Ritual</Text>
        <Text style={styles.subtitle}>{currentCard.tagline}</Text>
        <View style={styles.divider} />

        <View style={styles.block}>
          <Text style={styles.blockLabel}>Morning Anchor</Text>
          <Text style={styles.blockText}>
            {currentCard.ritual.morningAnchor}
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockLabel}>Work Approach</Text>
          <Text style={styles.blockText}>
            {currentCard.ritual.workApproach}
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockLabel}>Creative Prompt</Text>
          <Text style={styles.blockText}>
            {currentCard.ritual.creativePrompt}
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockLabel}>Movement</Text>
          <Text style={styles.blockText}>{currentCard.ritual.movement}</Text>
        </View>
        {/* Tracker */}
        <View style={styles.trackerGrid}>
          <TouchableOpacity
            style={styles.trackerItem}
            onPress={() =>
              setChecked((prev) => ({ ...prev, tarot: !prev.tarot }))
            }
          >
            <View
              style={[styles.checkbox, checked.tarot && styles.checkboxDone]}
            >
              {checked.tarot && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.trackerLabel}>Tarot Pull</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trackerItem}
            onPress={() =>
              setChecked((prev) => ({ ...prev, morning: !prev.morning }))
            }
          >
            <View
              style={[styles.checkbox, checked.morning && styles.checkboxDone]}
            >
              {checked.morning && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.trackerLabel}>Morning Anchor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trackerItem}
            onPress={() =>
              setChecked((prev) => ({ ...prev, work: !prev.work }))
            }
          >
            <View
              style={[styles.checkbox, checked.work && styles.checkboxDone]}
            >
              {checked.work && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.trackerLabel}>Work Approach</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trackerItem}
            onPress={() =>
              setChecked((prev) => ({ ...prev, creative: !prev.creative }))
            }
          >
            <View
              style={[styles.checkbox, checked.creative && styles.checkboxDone]}
            >
              {checked.creative && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.trackerLabel}>Creative Prompt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trackerItem}
            onPress={() =>
              setChecked((prev) => ({ ...prev, movement: !prev.movement }))
            }
          >
            <View
              style={[styles.checkbox, checked.movement && styles.checkboxDone]}
            >
              {checked.movement && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.trackerLabel}>Movement</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backBtn: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(45,140,140,0.7)",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "rgba(201,168,76,0.06)",
  },
  badgeText: {
    fontFamily: "JosefinSans_600SemiBold",
    fontSize: 11,
    color: Colors.gold,
    letterSpacing: 2,
  },
  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 28,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 13,
    color: "rgba(201,168,76,0.6)",
    letterSpacing: 2,
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(201,168,76,0.15)",
    marginBottom: 20,
  },
  block: {
    marginBottom: 20,
  },
  blockLabel: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 9,
    color: "rgba(45,140,140,0.8)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  blockText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    color: "rgba(245,237,214,0.8)",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  blockBold: {
    fontFamily: "JosefinSans_600SemiBold",
    color: Colors.cream,
  },
  blockItalic: {
    fontFamily: "JosefinSans_300Light_Italic",
    color: Colors.gold,
  },
  tracker: {
    borderTopWidth: 1,
    borderTopColor: "rgba(201,168,76,0.12)",
    paddingTop: 20,
    marginTop: 8,
    paddingBottom: 40,
  },
  trackerTitle: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 9,
    color: "rgba(201,168,76,0.45)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  trackerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  trackerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "45%",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.35)",
  },
  checkboxDone: {
    backgroundColor: "rgba(201,168,76,0.15)",
    borderColor: "rgba(201,168,76,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    fontSize: 10,
    color: Colors.gold,
  },
  trackerLabel: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(245,237,214,0.5)",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});
