import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const playerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl + 80,
  },

  title: {
    color: colors.text,
    fontSize: typhography.subheading,
    fontWeight: "800",
    marginBottom: spacing.md,
  },

  playerContainer: {
    marginBottom: spacing.md,
    borderRadius: 12,
    overflow: "hidden",
  },

  quality: {
    color: colors.caption,
    fontSize: typhography.caption,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },

  section: {
    marginTop: spacing.lg,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "700",
    marginBottom: spacing.md,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
});
