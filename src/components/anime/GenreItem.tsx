import { memo } from "react";

import { Pressable, Text } from "react-native";

import { genreItemStyles } from "@/styles/anime";

import { Genre } from "@/types";

interface GenreItemProps {
  genre: Genre;

  onPress?: (genre: Genre) => void;
}

function GenreItem({
  genre,

  onPress,
}: GenreItemProps) {
  return (
    <Pressable
      onPress={() => onPress?.(genre)}
      style={({ pressed }) => [
        genreItemStyles.container,

        pressed && genreItemStyles.pressed,
      ]}
    >
      <Text style={genreItemStyles.text}>{genre.title}</Text>
    </Pressable>
  );
}

export default memo(GenreItem);
