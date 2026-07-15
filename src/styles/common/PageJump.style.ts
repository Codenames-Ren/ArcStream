import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const pageJumpStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    marginVertical: spacing.md,
  },

  label: {
    color: colors.subtitle,
    fontSize: typhography.body,
    fontWeight: "600",
  },

  input: {
    width: 70,
    height: 40,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.divider,
    color: colors.text,
    textAlign: "center",
    fontSize: typhography.body,
    fontWeight: "700",
  },

  button: {
    height: 40,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.background,
    fontSize: typhography.body,
    fontWeight: "800",
  },
});
