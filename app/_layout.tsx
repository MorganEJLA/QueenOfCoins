import { Tabs } from "expo-router";
import { Colors } from "../constants/Colors";
import { CardProvider } from "../context/CardContext";

export default function RootLayout() {
  return (
    <CardProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.ink,
            borderTopColor: "rgba(201,168,76,0.1)",
          },
          tabBarActiveTintColor: Colors.gold,
          tabBarInactiveTintColor: "rgba(245,237,214,0.3)",
          tabBarLabelStyle: {
            fontFamily: "JosefinSans_300Light",
            fontSize: 10,
            letterSpacing: 1,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Today",
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="ritual"
          options={{
            title: "Ritual",
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: () => null,
          }}
        />
      </Tabs>
    </CardProvider>
  );
}
