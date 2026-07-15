import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const genreDetailStyles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    alignItems: "center",
  },

  title: {
    color: colors.primary,
    fontSize: typhography.h2,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    color: colors.caption,
    fontSize: typhography.body,
    marginTop: spacing.sm,
    textAlign: "center",
  },

  count: {
    color: colors.subtitle,
    fontSize: typhography.body,
    fontWeight: "600",
    marginTop: spacing.sm,
    textAlign: "center",
  },
});
