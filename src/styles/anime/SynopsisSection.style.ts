import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const synopsisSectionStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  title: {
    color: colors.primary,
    fontSize: typhography.subheading,
    fontWeight: "800",
    marginBottom: spacing.md,
  },

  text: {
    color: colors.subtitle,
    fontSize: typhography.body,
    lineHeight: 22,
  },
});
