import NetworkImage from "@/components/common/NetworkImage";
import { animeCardStyles } from "@/styles/anime";
import { Anime } from "@/types";
import { DimensionValue, Pressable, Text, View } from "react-native";
import GenreBadge from "./GenreBadge";
import ScoreBadge from "./ScoreBadge";

interface AnimeCardProps {
  anime: Anime;
  width?: DimensionValue;
  showScore?: boolean;
  showEpisode?: boolean;
  showTotalEpisode?: boolean;
  showUpdate?: boolean;
  showGenres?: boolean;
  maxGenres?: number;
  onPress?: () => void;
}

export default function AnimeCard({
  anime,
  width = 150,
  showScore = true,
  showEpisode = true,
  showTotalEpisode = false,
  showUpdate = false,
  showGenres = false,
  maxGenres = 2,
  onPress,
}: AnimeCardProps) {
  return (
    <Pressable
      style={[
        animeCardStyles.container,
        {
          width,
        },
      ]}
      onPress={onPress}
    >
      <View style={animeCardStyles.poster}>
        <NetworkImage uri={anime.cover} />

        {showScore && anime.score ? (
          <View style={animeCardStyles.overlay}>
            <ScoreBadge score={anime.score} />
          </View>
        ) : null}
      </View>

      <View style={animeCardStyles.content}>
        <Text style={animeCardStyles.title} numberOfLines={2}>
          {anime.title ?? "-"}
        </Text>

        {showEpisode && anime.latestEpisode ? (
          <Text style={animeCardStyles.episode}>
            Episode {anime.latestEpisode}
          </Text>
        ) : null}

        {showTotalEpisode && anime.totalEpisode ? (
          <Text style={animeCardStyles.episode}>
            {anime.totalEpisode} Episodes
          </Text>
        ) : null}

        {showUpdate && anime.latestUpdate ? (
          <Text style={animeCardStyles.update}>{anime.latestUpdate}</Text>
        ) : null}

        {showGenres && anime.genre?.length ? (
          <View style={animeCardStyles.genres}>
            {anime.genre.slice(0, maxGenres).map((genre) => (
              <GenreBadge key={genre.genreId} genre={genre.title} />
            ))}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}
