import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MovementPreference } from "../constants/movementData";
import { fullDeck, TarotCard } from "../constants/tarotCards";

export type HistoryEntry = {
  cardId: number;
  date: string;
};

type CardContextType = {
  currentCard: TarotCard;
  pullCard: () => void;
  movementPreference: MovementPreference | null;
  setMovementPreference: (pref: MovementPreference) => void;
  history: HistoryEntry[];
  streak: number;
};

const CardContext = createContext<CardContextType | null>(null);

const CARD_KEY = "qoc_current_card";
const CARD_DATE_KEY = "qoc_card_date";
const MOVEMENT_KEY = "qoc_movement_preference";
const HISTORY_KEY = "qoc_history";

function getRandomCard(): TarotCard {
  const index = Math.floor(Math.random() * fullDeck.length);
  return fullDeck[index];
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}
function calculateStreak(history: HistoryEntry[]): number {
  if (history.length === 0) return 0;
  const sorted = [...history].sort((a, b) => (a.date > b.date ? -1 : 1));

  const today = getTodayString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toISOString().split("T")[0];

  // If the most recent pull wasn't today or yesterday, streak is broken
  if (sorted[0].date !== today && sorted[0].date !== yesterdayString) {
    return 0;
  }

  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = new Date(sorted[i].date);
    const next = new Date(sorted[i + 1].date);
    const diff = (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
export function CardProvider({ children }: { children: ReactNode }) {
  const [currentCard, setCurrentCard] = useState<TarotCard>(getRandomCard);
  const [streak, setStreak] = useState(0);
  const [movementPreference, setMovementPreferenceState] =
    useState<MovementPreference | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //Load persisted data on mount

  useEffect(() => {
    async function loadData() {
      try {
        const today = getTodayString();
        //Restore card if it was pulled today
        const [savedCardId, savedDate, savedMovement, savedHistory] =
          await Promise.all([
            AsyncStorage.getItem(CARD_KEY),
            AsyncStorage.getItem(CARD_DATE_KEY),
            AsyncStorage.getItem(MOVEMENT_KEY),
            AsyncStorage.getItem(HISTORY_KEY),
          ]);

        if (savedCardId && savedDate === today) {
          const card = fullDeck.find((c) => c.id === parseInt(savedCardId));
          if (card) setCurrentCard(card);
        } else {
          // New Day, pull a new card and save it
          const newCard = getRandomCard();
          setCurrentCard(newCard);
          await AsyncStorage.setItem(CARD_KEY, String(newCard.id));
          await AsyncStorage.setItem(CARD_DATE_KEY, today);
          await saveToHistory(newCard.id, today, savedHistory);
        }

        // Restore movement preference
        if (savedMovement) {
          setMovementPreference(savedMovement as MovementPreference);
        }

        if (savedHistory) {
          const parsed = JSON.parse(savedHistory);
          setHistory(parsed);
          setStreak(calculateStreak(parsed));
        }
      } catch (e) {
        console.error("Failed to load card data", e);
      } finally {
        setIsLoaded(true);
      }
    }
    loadData();
  }, []);

  async function saveToHistory(
    cardId: number,
    date: string,
    existingHistoryJson: string | null,
  ) {
    const existing: HistoryEntry[] = existingHistoryJson
      ? JSON.parse(existingHistoryJson)
      : [];
    const alreadySaved = existing.some((e) => e.date === date);
    if (alreadySaved) return;

    const updated = [{ cardId, date }, ...existing];
    setHistory(updated);
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  }

  const pullCard = async () => {
    const newCard = getRandomCard();
    setCurrentCard(newCard);
    const today = getTodayString();
    await AsyncStorage.setItem(CARD_KEY, String(newCard.id));
    await AsyncStorage.setItem(CARD_DATE_KEY, today);
    const existingHistory = await AsyncStorage.getItem(HISTORY_KEY);
    await saveToHistory(newCard.id, today, existingHistory);
  };

  const setMovementPreference = async (pref: MovementPreference) => {
    setMovementPreferenceState(pref);
    await AsyncStorage.setItem(MOVEMENT_KEY, pref);
  };
  if (!isLoaded) return null; // or a loading spinner

  return (
    <CardContext.Provider
      value={{
        currentCard,
        pullCard,
        movementPreference,
        setMovementPreference,
        history,
        streak,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCard must be used within a CardProvider");
  return context;
}
