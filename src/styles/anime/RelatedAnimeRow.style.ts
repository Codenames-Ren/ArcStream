import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const relatedAnimeRowStyles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  title: {
    flex: 1,
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "700",
    marginRight: spacing.md,
  },

  arrow: {
    color: colors.primary,
    fontSize: typhography.subheading,
    fontWeight: "800",
  },
});
