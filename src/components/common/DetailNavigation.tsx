import { detailNavigationStyles } from "@/styles/common";
import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View } from "react-native";

const menus = [
  {
    icon: "home",
    route: "/",
  },
  {
    icon: "tv",
    route: "/(tabs)/anime",
  },
  {
    icon: "tag",
    route: "/(tabs)/genres",
  },
  {
    icon: "info",
    route: "/about",
  },
] as const;

export default function DetailNavigation() {
  function navigate(route: string) {
    router.navigate(route as never);
  }

  return (
    <View style={detailNavigationStyles.container}>
      {menus.map((item) => (
        <Pressable
          key={item.route}
          style={detailNavigationStyles.item}
          onPress={() => navigate(item.route)}
        >
          <Feather
            name={item.icon}
            size={22}
            color={colors.primary}
            style={detailNavigationStyles.icon}
          />
        </Pressable>
      ))}
    </View>
  );
}
