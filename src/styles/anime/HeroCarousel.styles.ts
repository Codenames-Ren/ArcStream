import { StyleSheet } from "react-native";

import { colors, spacing } from "@/theme";

export const heroCarouselStyles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: spacing.lg,
  },

  pagination: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    marginTop: spacing.md,

    gap: spacing.sm,
  },

  dotActive: {
    width: 24,

    height: 8,

    borderRadius: 999,

    backgroundColor: colors.primary,

    opacity: 1,
  },

  dotInactive: {
    width: 8,

    height: 8,

    borderRadius: 999,

    backgroundColor: colors.surface,

    opacity: 0.45,
  },
});
