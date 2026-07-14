import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { queryClient } from "@/lib/query-client";
import { colors } from "@/theme";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />

        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.background,
            },

            headerTintColor: colors.text,

            headerTitleStyle: {
              color: colors.text,
            },

            contentStyle: {
              backgroundColor: colors.background,
            },

            animation: "slide_from_right",

            presentation: "card",

            gestureEnabled: true,

            headerShadowVisible: false,

            gestureDirection: "horizontal",
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="search"
            options={{
              title: "Search",
            }}
          />

          <Stack.Screen
            name="anime/[id]"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="genre/[slug]"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="player/[episodeId]"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
