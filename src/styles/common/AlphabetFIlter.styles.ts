import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const alphabetFilterStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },

  topRow: {
    flexDirection: "row",

    alignItems: "center",

    gap: spacing.sm,
  },

  filterButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,

    borderRadius: radius.full,

    backgroundColor: colors.surface,

    justifyContent: "center",
    alignItems: "center",
  },

  filterButtonActive: {
    backgroundColor: colors.primary,
  },

  filterText: {
    color: colors.text,

    fontSize: typhography.body,

    fontWeight: "700",
  },

  filterTextActive: {
    color: colors.background,
  },

  alphabetButton: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,

    borderRadius: radius.full,

    backgroundColor: colors.surface,
  },

  arrow: {
    color: colors.primary,

    fontSize: typhography.body,
  },

  dropdown: {
    marginTop: spacing.sm,

    padding: spacing.md,

    borderRadius: radius.md,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,
  },

  alphabetRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: spacing.sm,
  },

  alphabetItem: {
    width: "18%",
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: radius.sm,

    backgroundColor: colors.card,
  },

  alphabetItemActive: {
    backgroundColor: colors.primary,
  },

  alphabetText: {
    color: colors.text,

    fontWeight: "700",

    fontSize: typhography.body,
  },

  alphabetTextActive: {
    color: colors.background,
  },

  pressed: {
    opacity: 0.7,
  },
});
