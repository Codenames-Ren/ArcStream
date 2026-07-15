import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const animeDetailHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },

  poster: {
    width: 120,
    aspectRatio: 2 / 3,
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.card,
  },

  posterImage: {
    width: "100%",
    height: "100%",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: colors.primary,
    fontSize: typhography.h2,
    fontWeight: "900",
    lineHeight: 28,
  },

  japaneseTitle: {
    color: colors.subtitle,
    marginTop: spacing.sm,
    fontSize: typhography.body,
  },

  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
    gap: spacing.xs,
  },

  score: {
    color: colors.warning,
    fontSize: typhography.body,
    fontWeight: "800",
  },

  info: {
    color: colors.caption,
    marginTop: spacing.sm,
    fontSize: typhography.caption,
  },
});
