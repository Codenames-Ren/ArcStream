import { colors, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  list: {
    flex: 1,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 80,
  },

  header: {
    marginBottom: spacing.xxl,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  card: {
    width: "48%",
  },

  pagination: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
});
