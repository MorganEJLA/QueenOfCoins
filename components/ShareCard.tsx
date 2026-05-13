import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { TarotCard } from "../constants/tarotCards";
import CardIcon from "./CardIcon";
import { QOCLogo } from "./QOCLogo";

type Props = {
  card: TarotCard;
};

export default function ShareCard({ card }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ opacity: 0.2 }}>
        <QOCLogo size={64} />
      </View>
      <View style={styles.iconWrap}>
        <CardIcon id={card.id} size={64} />
      </View>
      <Text style={styles.suit}>
        {card.suit === "major" ? "MAJOR ARCANA" : card.suit.toUpperCase()}
      </Text>
      <Text style={styles.name}>{card.name.toUpperCase()}</Text>
      <Text style={styles.tagline}>{card.tagline}</Text>
      <View style={styles.divider} />
      <Text style={styles.prompt}>{card.ritual.creativePrompt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    backgroundColor: Colors.ink,
    padding: 40,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(201,168,76,0.3)",
  },
  iconWrap: {
    marginBottom: 0,
  },
  suit: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 9,
    color: "rgba(45,140,140,0.8)",
    letterSpacing: 4,
    marginBottom: 8,
  },
  name: {
    fontFamily: "JosefinSans_700Bold",
    fontSize: 22,
    color: Colors.cream,
    letterSpacing: 3,
    textAlign: "center",
    marginBottom: 10,
  },
  tagline: {
    fontFamily: "JosefinSans_300Light_Italic",
    fontSize: 13,
    color: "rgba(201,168,76,0.7)",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 24,
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: "rgba(201,168,76,0.3)",
    marginBottom: 24,
  },
  prompt: {
    fontFamily: "JosefinSans_300Light",
    fontSize: 12,
    color: "rgba(245,237,214,0.7)",
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 20,
  },
});
