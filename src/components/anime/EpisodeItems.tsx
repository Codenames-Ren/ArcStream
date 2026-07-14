import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { episodeItemStyles } from "@/styles/anime/EpisodeItem.styles";
import { colors } from "@/theme";

interface EpisodeItemProps {
  episode: number;
  title: string;
  date?: string;
  onPress?: () => void;
}

export default function EpisodeItem({
  episode,
  title,
  date,
  onPress,
}: EpisodeItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        episodeItemStyles.container,
        pressed && episodeItemStyles.pressed,
      ]}
      onPress={onPress}
      disabled={!onPress}
      android_ripple={{
        color: colors.primaryPressed,
      }}
    >
      <View style={episodeItemStyles.episodeNumberContainer}>
        <Text style={episodeItemStyles.episodeNumber}>{episode}</Text>
      </View>

      <View style={episodeItemStyles.content}>
        <Text style={episodeItemStyles.title} numberOfLines={2}>
          {title}
        </Text>

        {date && <Text style={episodeItemStyles.date}>{date}</Text>}
      </View>

      <View style={episodeItemStyles.iconContainer}>
        <Feather name="play-circle" size={22} color={colors.primary} />
      </View>
    </Pressable>
  );
}
