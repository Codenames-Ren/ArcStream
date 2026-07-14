import { Feather } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

import { serverButtonStyles } from "@/styles/anime/ServerButton.styles";
import { colors } from "@/theme";

interface ServerButtonProps {
  name: string;

  active?: boolean;

  onPress?: () => void;
}

export default function ServerButton({
  name,

  active = false,

  onPress,
}: ServerButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        serverButtonStyles.container,

        active && serverButtonStyles.activeContainer,

        pressed && serverButtonStyles.pressed,
      ]}
      onPress={onPress}
      disabled={!onPress}
      android_ripple={{
        color: colors.primaryPressed,
      }}
    >
      {active && (
        <Feather
          name="check"
          size={14}
          color={colors.background}
          style={serverButtonStyles.icon}
        />
      )}

      <Text
        style={[
          serverButtonStyles.text,

          active && serverButtonStyles.activeText,
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
}
