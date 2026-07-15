import { colors, spacing, typhography } from "@/theme";
import { StyleSheet } from "react-native";

export const genreDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingBottom: spacing.xxxl + 80,
  },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },

  title: {
    color: colors.primary,
    fontSize: typhography.h2,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    color: colors.caption,
    fontSize: typhography.body,
    marginTop: spacing.sm,
    textAlign: "center",
  },

  count: {
    color: colors.subtitle,
    fontSize: typhography.body,
    fontWeight: "600",
    marginTop: spacing.sm,
    textAlign: "center",
  },

  row: {
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },

  card: {
    width: "48%",
  },

  paginationContainer: {
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    marginVertical: spacing.md,
  },
});
