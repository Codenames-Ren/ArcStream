import { colors, radius, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
  },

  logoWrapper: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.9,
    shadowRadius: 25,
    elevation: 20,
  },

  logo: {
    width: 110,
    height: 110,
  },

  title: {
    color: colors.primary,
    fontSize: typhography.heading,
    fontWeight: "900",
  },

  version: {
    color: colors.subtitle,
    marginTop: spacing.sm,
    fontSize: typhography.body,
    fontWeight: "600",
  },

  description: {
    color: colors.caption,
    marginTop: spacing.lg,
    maxWidth: 300,
    textAlign: "center",
    lineHeight: 22,
    fontSize: typhography.body,
  },

  divider: {
    width: 180,
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.xl,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: typhography.body,
    fontWeight: "800",
    marginBottom: spacing.md,
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: spacing.sm,
    maxWidth: 300,
  },

  techItem: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },

  techText: {
    color: colors.subtitle,
    fontSize: typhography.caption,
    fontWeight: "700",
  },

  footer: {
    color: colors.caption,
    fontSize: typhography.caption,
    textAlign: "center",
  },
});
