import { StyleSheet } from "react-native";

import { colors, radius, spacing, typhography } from "@/theme";

export const animeMetaStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.md,
  },

  label: {
    color: colors.caption,
    fontSize: typhography.caption,
    fontWeight: "600",
    flex: 1,
  },

  value: {
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "700",
    flex: 2,
    textAlign: "right",
  },
});
