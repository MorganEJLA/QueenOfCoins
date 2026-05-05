import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { getAllEntries, JournalEntry } from "./hooks/useJournal";

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    getAllEntries().then(setEntries);
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Journal</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {entries.length === 0 ? (
          <Text style={styles.empty}>No entries yet.</Text>
        ) : (
          entries.map((e, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.cardName}>{e.cardName}</Text>
                <Text style={styles.date}>{e.date}</Text>
              </View>
              <Text style={styles.entryText}>{e.text}</Text>
            </View>
          ))
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
  header: {
    marginBottom: 24,
  },
  backBtn: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(45,140,140,0.7)",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  title: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 28,
    color: Colors.cream,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  empty: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    color: "rgba(245,237,214,0.4)",
    letterSpacing: 1,
    marginTop: 40,
    textAlign: "center",
  },
  entry: {
    borderTopWidth: 1,
    borderTopColor: "rgba(201,168,76,0.12)",
    paddingVertical: 20,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardName: {
    fontFamily: "JosefinSans_600SemiBold",
    fontSize: 11,
    color: Colors.gold,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  date: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 11,
    color: "rgba(245,237,214,0.3)",
    letterSpacing: 1,
  },
  entryText: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 14,
    color: "rgba(245,237,214,0.8)",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
