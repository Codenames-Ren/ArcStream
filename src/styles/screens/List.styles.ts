import { colors, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 80,
  },

  header: {
    gap: spacing.xs,
    marginBottom: spacing.xl,
    alignItems: "center",
  },

  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    color: colors.caption,
    fontSize: 14,
  },

  gridContainer: {
    marginTop: spacing.sm,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  card: {
    width: "48%",
  },

  pagination: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },

  pageJump: {
    marginBottom: 20,
  },
});
