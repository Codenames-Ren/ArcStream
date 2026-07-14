import { StyleSheet } from "react-native";

import { spacing } from "@/theme";

export const animeGridStyles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },

  content: {
    paddingBottom: spacing.xxxl,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  card: {
    width: "48%",
  },
});
