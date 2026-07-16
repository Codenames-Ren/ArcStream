import SplashScreen from "@/components/common/SplashScreen";
import { queryClient } from "@/lib/query-client";
import { colors } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

ExpoSplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await ExpoSplashScreen.hideAsync();
    }

    prepare();
  }, []);

  if (!ready) {
    return (
      <SafeAreaProvider
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <SplashScreen
          onFinish={() => {
            setReady(true);
          }}
        />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
        edges={["top", "bottom"]}
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
            <Stack.Screen
              name="list/[type]"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
