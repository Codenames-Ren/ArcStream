import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const serverSelectorStyles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },

  title: {
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },

  item: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },

  itemActive: {
    backgroundColor: colors.primary,
  },

  itemText: {
    color: colors.caption,
    fontSize: typhography.caption,
    fontWeight: "600",
  },

  itemTextActive: {
    color: colors.background,
  },
});
