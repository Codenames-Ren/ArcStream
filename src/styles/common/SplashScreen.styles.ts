import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 96,
    height: 96,
    marginBottom: spacing.lg,
  },

  title: {
    color: colors.text,
    fontSize: typhography.heading,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },

  caption: {
    color: colors.caption,
    fontSize: typhography.body,
    marginBottom: spacing.xl,
  },

  dots: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  dot: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "800",
  },
});
