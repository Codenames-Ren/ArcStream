import { colors, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const videoPlayerStyles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: colors.background,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: spacing.lg,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
  },

  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },

  errorText: {
    color: colors.caption,
    textAlign: "center",
    fontSize: 14,
  },
});
