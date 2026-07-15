import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const genreBadgeStyles = StyleSheet.create({
  badge: {
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    alignSelf: "flex-start",
  },

  text: {
    color: colors.accent,
    fontSize: typhography.caption,
    fontWeight: "600",
  },
});
