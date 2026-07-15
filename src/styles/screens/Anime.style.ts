import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const animeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 80,
  },

  title: {
    color: colors.primary,
    fontSize: typhography.h2,
    fontWeight: "800",
    textAlign: "center",
    marginTop: spacing.sm,
  },

  subtitle: {
    color: colors.caption,
    textAlign: "center",
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },

  row: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
});
