import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const animeListItemStyles = StyleSheet.create({
  container: {
    flex: 1,

    minHeight: 52,

    justifyContent: "center",

    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,

    borderRadius: radius.md,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,
  },

  pressed: {
    opacity: 0.75,
  },

  title: {
    color: colors.text,

    fontSize: typhography.body,

    fontWeight: "600",
  },
});
