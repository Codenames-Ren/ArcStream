import { StyleSheet } from "react-native";

import { colors, spacing, typhography } from "@/theme";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: { paddingBottom: spacing.xxxl },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },

  logo: {
    color: colors.primary,
    fontSize: typhography.heading,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
  },

  searchContainer: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },

  heroContainer: {
    marginBottom: spacing.xl,
  },

  section: {
    marginTop: spacing.lg,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  logoIcon: {
    width: 34,
    height: 34,
  },
});
