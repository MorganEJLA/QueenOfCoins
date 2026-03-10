// im replacing the default layout of the Stack navigator with a Tab navigator //

import { Tabs } from "expo-router";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.ink,
          borderTopColor: "rgba(201,168,76,0.1)",
        },
        tabBarActiveTintColor: Colors.gold,
        tabBarInactiveTintColor: "rgba(245,237,214,0.3)",
        tabBarLabelStyle: {
          fontFamily: "CormorantGaramond_400Regular",
          fontSize: 10,
          letterSpacing: 1,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Today" }} />
      <Tabs.Screen name="ritual" options={{ title: "Ritual" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
