# Queen of Coins

A tarot-anchored daily ritual app built with React Native and Expo.

Pull a card each morning and receive a personalized ritual — a morning anchor, work approach, creative prompt, movement suggestion, and journal space — all tied to that card's energy.

---

## Features

- **Full 78-card deck** — all Major Arcana, Minor Arcana, and Court Cards with unique ritual content per card
- **Daily ritual screen** — morning anchor, work approach, creative prompt, and movement suggestion
- **Journal** — write and save daily reflections tied to each card, persisted with AsyncStorage
- **Streak tracking** — tracks consecutive days of practice
- **Low energy toggle** — swaps movement suggestions to restorative options
- **Movement preference** — choose between standard, Capoeira, or qi gong suggestions
- **Share card** — export a styled card image to share
- **Onboarding flow** — movement preference setup on first launch

---

## Tech Stack

- React Native / Expo (file-based routing)
- TypeScript
- AsyncStorage for local persistence
- react-native-view-shot for image sharing
- expo-notifications
- Custom SVG tab icons

---


## Screenshots

| Today | Ritual | Journal | Settings |
|-------|--------|---------|---------|
| <img width="160" src="https://github.com/user-attachments/assets/b9de0ae7-a50d-4a5b-891b-cb82d61feca1" /> | <img width="160" src="https://github.com/user-attachments/assets/274770f8-95bb-41cb-8570-d0e8a5aedda8" /> | <img width="160" src="https://github.com/user-attachments/assets/5962e017-11ec-43e3-8c29-e6d1c66c26d2" /> | <img width="160" src="https://github.com/user-attachments/assets/b7925ec7-347c-4a6f-b9e4-ccc3064555ea" /> |
---

## Running Locally

```bash
npm install
npx expo start
```

Requires Expo Go on iOS or Android, or an iOS/Android simulator.

---

## Status

Active development. Currently in personal beta — used daily as a wellness and creative practice tool.










