import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const paginationStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    marginVertical: spacing.lg,
  },

  button: {
    minWidth: 40,
    height: 40,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonActive: {
    backgroundColor: colors.primary,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  text: {
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "700",
  },

  textActive: {
    color: colors.background,
  },

  dots: {
    color: colors.caption,
    fontSize: typhography.body,
    fontWeight: "700",
    paddingHorizontal: spacing.xs,
  },
});
