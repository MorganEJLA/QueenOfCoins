import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export type JournalEntry = {
  date: string;
  cardName: string;
  text: string;
};

const getKey = (date: string, cardName: string) =>
  `journal_${date}_${cardName.replace(/\s+/g, "_")}`;

const todayDate = () => new Date().toISOString().split("T")[0];

export function useJournal(cardName: string) {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const load = async () => {
      const key = getKey(todayDate(), cardName);
      const stored = await AsyncStorage.getItem(key);
      if (stored) {
        const parsed: JournalEntry = JSON.parse(stored);
        setEntry(parsed.text);
      }
    };
    load();
  }, [cardName]);

  const save = async (text: string) => {
    const key = getKey(todayDate(), cardName);
    const data: JournalEntry = {
      date: todayDate(),
      cardName,
      text,
    };
    await AsyncStorage.setItem(key, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return { entry, setEntry, save, saved };
}

export async function getAllEntries(): Promise<JournalEntry[]> {
  const keys = await AsyncStorage.getAllKeys();
  const journalKeys = keys.filter((k) => k.startsWith("journal_"));
  const entries = await AsyncStorage.multiGet(journalKeys);
  return entries
    .map(([, val]) => (val ? JSON.parse(val) : null))
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
