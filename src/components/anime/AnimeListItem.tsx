import { memo } from "react";

import { Pressable, Text } from "react-native";

import { animeListItemStyles } from "@/styles/anime";

import { Anime } from "@/types";

interface AnimeListItemProps {
  anime: Anime;

  onPress?: (anime: Anime) => void;
}

function AnimeListItem({ anime, onPress }: AnimeListItemProps) {
  return (
    <Pressable
      android_ripple={{
        color: "rgba(255,255,255,0.08)",
      }}
      onPress={() => onPress?.(anime)}
      style={({ pressed }) => [
        animeListItemStyles.container,
        pressed && animeListItemStyles.pressed,
      ]}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={animeListItemStyles.title}
      >
        {anime.title}
      </Text>
    </Pressable>
  );
}

export default memo(AnimeListItem);
