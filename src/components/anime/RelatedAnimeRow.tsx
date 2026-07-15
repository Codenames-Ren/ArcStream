import { relatedAnimeRowStyles } from "@/styles/anime";
import { AnimeConnection } from "@/types";
import { Pressable, Text, View } from "react-native";

interface RelatedAnimeRowProps {
  data: AnimeConnection[];
  onPress?: (id: string) => void;
}

export default function RelatedAnimeRow({
  data,
  onPress,
}: RelatedAnimeRowProps) {
  return (
    <View style={relatedAnimeRowStyles.container}>
      {data.map((anime) => (
        <Pressable
          key={anime.animeId}
          style={({ pressed }) => [
            relatedAnimeRowStyles.item,

            pressed && {
              opacity: 0.7,
            },
          ]}
          onPress={() => onPress?.(anime.animeId)}
        >
          <Text style={relatedAnimeRowStyles.title} numberOfLines={2}>
            {anime.title}
          </Text>

          <Text style={relatedAnimeRowStyles.arrow}>›</Text>
        </Pressable>
      ))}
    </View>
  );
}
