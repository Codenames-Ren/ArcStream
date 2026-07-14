import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { colors } from "@/theme";

export default function GenreDetailScreen() {
  const { slug } = useLocalSearchParams<{
    slug: string;
  }>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Genre Detail
      </Text>

      <Text
        style={{
          color: colors.caption,
          marginTop: 8,
        }}
      >
        {slug}
      </Text>
    </View>
  );
}
