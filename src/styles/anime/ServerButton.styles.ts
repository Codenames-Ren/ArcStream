import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const serverButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,

    borderRadius: radius.full,

    backgroundColor: colors.surface,

    marginRight: spacing.sm,
  },

  activeContainer: {
    backgroundColor: colors.primary,
  },

  text: {
    color: colors.text,

    fontSize: typhography.body,

    fontWeight: "600",
  },

  activeText: {
    color: colors.background,
  },

  icon: {
    marginRight: spacing.xs,
  },

  pressed: {
    opacity: 0.7,
  },
});
