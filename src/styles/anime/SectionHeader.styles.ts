import { StyleSheet } from "react-native";

import { colors, spacing, typhography } from "@/theme";

export const sectionHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: spacing.md,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    color: colors.text,

    fontSize: typhography.heading,

    fontWeight: "700",
  },

  subtitle: {
    color: colors.subtitle,

    fontSize: typhography.caption,

    marginTop: spacing.xs,
  },

  action: {
    marginLeft: spacing.md,
  },

  actionText: {
    color: colors.primary,

    fontSize: typhography.caption,

    fontWeight: "600",
  },
});
