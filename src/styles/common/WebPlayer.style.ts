import { colors } from "@/theme";
import { StyleSheet } from "react-native";

export const webPlayerStyles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: colors.background,
    borderRadius: 12,
    overflow: "hidden",
  },

  webView: {
    flex: 1,
  },

  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
  },

  errorText: {
    color: colors.caption,
    fontSize: 14,
    textAlign: "center",
  },
});
