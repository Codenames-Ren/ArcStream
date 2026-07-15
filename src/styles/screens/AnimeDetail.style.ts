import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const animeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 80,
  },
  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    color: colors.primary,
    fontSize: typhography.subheading,
    fontWeight: "800",
    marginBottom: spacing.md,
  },

  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },

  recommendationContent: {
    paddingRight: spacing.lg,
  },

  recommendationSeparator: {
    width: spacing.md,
  },
});
