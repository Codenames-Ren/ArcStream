import { colors, radius, spacing } from "@/theme";

import { StyleSheet } from "react-native";

export const detailNavigationStyles = StyleSheet.create({
  container: {
    position: "absolute",

    left: spacing.lg,

    right: spacing.lg,

    bottom: spacing.lg,

    height: 60,

    backgroundColor: colors.surface,

    borderRadius: radius.xl,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-around",

    borderWidth: 1,

    borderColor: colors.divider,
  },

  item: {
    flex: 1,

    height: "100%",

    justifyContent: "center",

    alignItems: "center",
  },

  icon: {
    marginBottom: 2,
  },
});
