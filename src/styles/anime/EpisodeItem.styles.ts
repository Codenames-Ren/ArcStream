import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const episodeItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.surface,

    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,

    borderRadius: radius.md,

    marginBottom: spacing.sm,
  },

  episodeNumberContainer: {
    width: 42,
    height: 42,

    borderRadius: radius.full,

    backgroundColor: colors.card,

    justifyContent: "center",
    alignItems: "center",

    marginRight: spacing.md,
  },

  episodeNumber: {
    color: colors.primary,

    fontSize: typhography.body,

    fontWeight: "700",
  },

  content: {
    flex: 1,
  },

  title: {
    color: colors.text,

    fontSize: typhography.body,

    fontWeight: "600",
  },

  date: {
    color: colors.subtitle,

    fontSize: typhography.caption,

    marginTop: spacing.xs,
  },

  iconContainer: {
    marginLeft: spacing.md,
  },

  pressed: {
    opacity: 0.7,
  },
});
