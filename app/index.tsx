import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardIcon from "../components/CardIcon";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { useCard } from "../context/CardContext";

export default function Today() {
  const [fontsLoaded] = useFonts(fonts);
  const { currentCard, streak } = useCard();

  if (!fontsLoaded) return null;

  const romanNumerals = [
    "0",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
  ];
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const monthDay = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.date}>
        {dayName} · {monthDay}
      </Text>
      {streak > 0 && <Text style={styles.streak}>{streak} day streak 🜂</Text>}
      <View style={styles.cardContainer}>
        <View style={styles.cardSymbol}>
          <CardIcon id={currentCard.id} size={72} />
        </View>
        <Text style={styles.cardNumber}>
          {currentCard.suit === "major"
            ? `${romanNumerals[currentCard.id]} · Major Arcana`
            : `${currentCard.suit.charAt(0).toUpperCase() + currentCard.suit.slice(1)}`}
        </Text>
        <Text style={styles.cardName}>{currentCard.name}</Text>
        <Text style={styles.cardTagline}>{currentCard.tagline}</Text>
        <Text style={styles.cardDesc}>{currentCard.description}</Text>
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
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 36,
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
  streak: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 10,
    color: Colors.gold,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginTop: 6,
    opacity: 0.7,
  },
});
