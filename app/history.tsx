import { useFonts } from "expo-font";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardIcon from "../components/CardIcon";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { majorArcana } from "../constants/tarotCards";
import { useCard } from "../context/CardContext";

export default function History() {
  const [fontsLoaded] = useFonts(fonts);
  const { history: cardHistory } = useCard();

  if (!fontsLoaded) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>Queen Of Coins</Text>
      <Text style={styles.pageTitle}>History</Text>
      <View style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {cardHistory.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Your pulls will appear here.</Text>
            <Text style={styles.emptySubtext}>Come back tomorrow.</Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {cardHistory.map((entry, index) => {
              const card = majorArcana.find((c) => c.id === entry.cardId);
              if (!card) return null;
              return (
                <View key={index} style={styles.card}>
                  <View style={styles.iconWrap}>
                    <CardIcon id={card.id} size={36} />
                  </View>
                  <Text style={styles.cardName}>{card.name}</Text>
                  <Text style={styles.cardDate}>{formatDate(entry.date)}</Text>
                </View>
              );
            })}
          </View>
        )}
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
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    gap: 8,
  },
  emptyText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 13,
    color: "rgba(245,237,214,0.4)",
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  emptySubtext: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 12,
    color: "rgba(201,168,76,0.3)",
    letterSpacing: 2,
    textAlign: "center",
  },
});
