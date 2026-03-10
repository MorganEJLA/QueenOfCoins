import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

export default function Ritual() {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>← Today</Text>
        </TouchableOpacity>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🌕 The Moon</Text>
        </View>
      </View>

      <Text style={styles.title}>Todays Ritual</Text>
      <Text style={styles.subtitle}>slow down. trust the dark.</Text>
      {/* Divider */}
      <View style={styles.divider} />

      {/* Ritual Blocks */}
      <View style={styles.block}>
        <Text style={styles.blockLabel}>Morning Anchor</Text>
        <Text style={styles.blockText}>
          <Text style={styles.blockBold}>
            Before your screen, sit in the quiet.{" "}
          </Text>
          Try 5 minutes of Holding the Tree — feel your feet on the floor. The
          Moon asks you to root before you reach.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockLabel}>Work Approach</Text>
        <Text style={styles.blockText}>
          <Text style={styles.blockBold}>Dont force clarity today. </Text>
          Work in shorter bursts — 45 minutes, then step away. Intuition is
          doing background processing. Let it.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockLabel}>Creative Prompt</Text>
        <Text style={styles.blockText}>
          <Text style={styles.blockItalic}>
            What am I afraid to write down?{" "}
          </Text>
          Open your morning pages and let it come without editing. The Moon
          rules what we hide from ourselves.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockLabel}>Movement</Text>
        <Text style={styles.blockText}>
          <Text style={styles.blockBold}>Slow and fluid today. </Text>
          Qigong or gentle stretching — Swimming Dragon or Pulling Down the
          Heavens. Save the fire days for Fonda.
        </Text>
      </View>
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
    fontSize: 12,
    color: "rgba(45,140,140,0.7)",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  badge: {
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "rgba(201,168,76,0.06)",
  },
  badgeText: {
    fontFamily: "Fraunces_700Bold",
    fontSize: 12,
    color: Colors.gold,
  },
  title: {
    fontFamily: "Fraunces_900Black",
    fontSize: 28,
    color: Colors.cream,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "Fraunces_300Light_Italic",
    fontSize: 13,
    color: "rgba(201,168,76,0.6)",
    letterSpacing: 1,
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
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(45,140,140,0.8)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  blockText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 17,
    color: "rgba(245,237,214,0.85)",
    lineHeight: 26,
  },
  blockBold: {
    fontFamily: "Fraunces_500Medium",
    fontSize: 17,
    color: Colors.cream,
  },
  blockItalic: {
    fontFamily: "JosefinSans_300Light_Italic",
    color: Colors.gold,
  },
});
