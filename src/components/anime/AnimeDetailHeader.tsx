import { animeDetailHeaderStyles } from "@/styles/anime";
import { Anime } from "@/types";
import { Image } from "expo-image";
import { Text, View } from "react-native";

interface AnimeDetailHeaderProps {
  anime: Anime;
}

export default function AnimeDetailHeader({ anime }: AnimeDetailHeaderProps) {
  return (
    <View style={animeDetailHeaderStyles.container}>
      <View style={animeDetailHeaderStyles.poster}>
        <Image
          source={{
            uri: anime.cover,
          }}
          style={animeDetailHeaderStyles.posterImage}
          contentFit="cover"
        />
      </View>

      <View style={animeDetailHeaderStyles.content}>
        <Text style={animeDetailHeaderStyles.title} numberOfLines={3}>
          {anime.title}
        </Text>

        {anime.japaneseTitle ? (
          <Text style={animeDetailHeaderStyles.japaneseTitle} numberOfLines={2}>
            {anime.japaneseTitle}
          </Text>
        ) : null}

        {anime.score ? (
          <View style={animeDetailHeaderStyles.scoreContainer}>
            <Text>⭐</Text>

            <Text style={animeDetailHeaderStyles.score}>{anime.score}</Text>
          </View>
        ) : null}

        <Text style={animeDetailHeaderStyles.info}>
          {anime.type ?? "-"}
          {" • "}
          {anime.status ?? "-"}
        </Text>
      </View>
    </View>
  );
}
