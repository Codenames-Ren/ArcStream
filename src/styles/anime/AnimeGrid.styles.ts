import { spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const animeGridStyles = StyleSheet.create({
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
