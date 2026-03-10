import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";

export default function Today() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.date}>Monday · March 9</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.cardSymbol}>🌕</Text>
        <Text style={styles.cardNumber}>XVIII · Major Arcana</Text>
        <Text style={styles.cardName}>The Moon</Text>
        <Text style={styles.cardTagline}>trust what you cannot yet see</Text>
        <Text style={styles.cardDesc}>
          You are moving through fog. That is not failure — it is the
          in-between. The path is still there. Your body knows the way before
          your mind does.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push("/ritual")}
        >
          <Text style={styles.ctaText}>Begin Your Ritual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ink,
    alignItems: "center",
    paddingTop: 60,
  },
  wordmark: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(201,168,76,0.5)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  date: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(45,140,140,0.7)",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  cardSymbol: {
    fontSize: 64,
    marginBottom: 16,
  },
  cardNumber: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(201,168,76,0.5)",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  cardName: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 48,
    color: Colors.cream,
    letterSpacing: 2,
    marginBottom: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
  cardTagline: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 14,
    color: Colors.gold,
    letterSpacing: 2,
    marginBottom: 24,
    textAlign: "center",
  },
  cardDesc: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 15,
    color: "rgba(245,237,214,0.6)",
    lineHeight: 26,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  ctaButton: {
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.4)",
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginTop: 40,
    backgroundColor: "rgba(201,168,76,0.08)",
  },
  ctaText: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 11,
    color: Colors.gold,
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});
