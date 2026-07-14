import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "@/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },

        tabBarActiveTintColor: colors.primary,

        tabBarInactiveTintColor: colors.caption,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="anime"
        options={{
          title: "Anime",
          tabBarIcon: ({ color, size }) => (
            <Feather name="tv" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="genres"
        options={{
          title: "Genres",
          tabBarIcon: ({ color, size }) => (
            <Feather name="tag" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
