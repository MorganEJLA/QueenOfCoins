import { useFonts } from "expo-font";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardIcon from "../components/CardIcon";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { majorArcana } from "../constants/tarotCards";

const mockHistory = [
  { cardId: 18, date: "Mon · Mar 10" },
  { cardId: 9, date: "Sun · Mar 9" },
  { cardId: 3, date: "Sat · Mar 8" },
  { cardId: 21, date: "Fri · Mar 7" },
  { cardId: 7, date: "Thu · Mar 6" },
  { cardId: 14, date: "Wed · Mar 5" },
  { cardId: 0, date: "Tue · Mar 4" },
  { cardId: 11, date: "Mon · Mar 3" },
  { cardId: 17, date: "Sun · Mar 2" },
];

export default function History() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.pageTitle}>History</Text>
      <View style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {mockHistory.map((entry, index) => {
            const card = majorArcana[entry.cardId];
            return (
              <View key={index} style={styles.card}>
                <View style={styles.iconWrap}>
                  <CardIcon id={card.id} size={36} />
                </View>
                <Text style={styles.cardName}>{card.name}</Text>
                <Text style={styles.cardDate}>{entry.date}</Text>
              </View>
            );
          })}
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    paddingBottom: 40,
  },
  card: {
    width: "30%",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.1)",
    backgroundColor: "rgba(201,168,76,0.03)",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  iconWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  cardName: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 9,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  cardDate: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 8,
    color: "rgba(201,168,76,0.45)",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
