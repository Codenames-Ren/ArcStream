import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const episodeNavigationStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.lg,
  },

  button: {
    minWidth: 140,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.45,
  },

  buttonLeft: {
    marginRight: spacing.sm,
  },

  buttonRight: {
    marginLeft: spacing.sm,
  },

  label: {
    color: colors.primary,
    fontSize: typhography.body,
    fontWeight: "700",
  },

  labelDisabled: {
    color: colors.caption,
  },

  title: {
    color: colors.caption,
    fontSize: typhography.caption,
    marginTop: 2,
    textAlign: "center",
  },
});
