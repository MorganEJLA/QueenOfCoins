import { createContext, ReactNode, useContext, useState } from "react";
import { MovementPreference } from "../constants/movementData";
import { majorArcana, TarotCard } from "../constants/tarotCards";

type CardContextType = {
  currentCard: TarotCard;
  pullCard: () => void;
  movementPreference: MovementPreference | null;
  setMovementPreference: (pref: MovementPreference) => void;
};

const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: ReactNode }) {
  const getRandomCard = () => {
    const index = Math.floor(Math.random() * majorArcana.length);
    return majorArcana[index];
  };

  const [currentCard, setCurrentCard] = useState<TarotCard>(getRandomCard);
  const [movementPreference, setMovementPreference] = useState<MovementPreference | null>(null);

  const pullCard = () => {
    setCurrentCard(getRandomCard());
  };

  return (
    <CardContext.Provider value={{ currentCard, pullCard, movementPreference, setMovementPreference }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCard must be used within a CardProvider");
  return context;
}
