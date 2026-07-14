import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const genreItemStyles = StyleSheet.create({
  container: {
    flex: 1,

    minHeight: 56,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,

    borderRadius: radius.md,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,
  },

  pressed: {
    opacity: 0.7,
  },

  text: {
    color: colors.text,

    fontSize: typhography.body,

    fontWeight: "700",

    textAlign: "center",
  },
});
