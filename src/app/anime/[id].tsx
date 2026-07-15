import AnimeDetailHeader from "@/components/anime/AnimeDetailHeader";
import AnimeMeta from "@/components/anime/AnimeMeta";
import EpisodeItem from "@/components/anime/EpisodeItems";
import GenreBadge from "@/components/anime/GenreBadge";
import RecommendationRow from "@/components/anime/RecommendationRow";
import RelatedAnimeRow from "@/components/anime/RelatedAnimeRow";
import SynopsisSection from "@/components/anime/SynopsisSection";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import ErrorState from "@/components/common/ErrorState";
import { useAnimeDetail } from "@/hooks";
import { animeDetailStyles } from "@/styles/screens";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function AnimeDetailScreen() {
  const params = useLocalSearchParams<{
    id: string;
  }>();
  const animeId = params.id;
  const detailQuery = useAnimeDetail(animeId);

  function openEpisode(episodeId: string) {
    router.push({
      pathname: "/player/[episodeId]",
      params: {
        episodeId,
      },
    });
  }

  function openGenre(slug: string) {
    router.push({
      pathname: "/genre/[slug]",
      params: {
        slug,
      },
    });
  }

  function openAnime(id: string) {
    router.push({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  if (detailQuery.isPending) {
    return <CatLoader message="Loading anime detail~" />;
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load anime detail."
        buttonText="Retry"
        onRetry={() => detailQuery.refetch()}
      />
    );
  }

  const anime = detailQuery.data;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={animeDetailStyles.container}
        contentContainerStyle={animeDetailStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <AnimeDetailHeader anime={anime} />

        {!!anime.genre?.length && (
          <View style={animeDetailStyles.section}>
            <Text style={animeDetailStyles.sectionTitle}>Genres</Text>
            <View style={animeDetailStyles.genreContainer}>
              {anime.genre.map((genre) => (
                <GenreBadge
                  key={genre.genreId}
                  genre={genre.title}
                  onPress={() => openGenre(genre.genreId)}
                />
              ))}
            </View>
          </View>
        )}

        <AnimeMeta anime={anime} />

        {!!anime.connections?.length && (
          <View style={animeDetailStyles.section}>
            <Text style={animeDetailStyles.sectionTitle}>Related Anime</Text>

            <RelatedAnimeRow data={anime.connections} onPress={openAnime} />
          </View>
        )}

        <SynopsisSection anime={anime} />

        {!!anime.episodes?.length && (
          <View style={animeDetailStyles.section}>
            <Text style={animeDetailStyles.sectionTitle}>Episodes</Text>

            {anime.episodes.map((episode) => (
              <EpisodeItem
                key={episode.episodeId}
                episode={episode.episode}
                title={episode.title}
                date={episode.date}
                onPress={() => openEpisode(episode.episodeId)}
              />
            ))}
          </View>
        )}

        {!!anime.recommendations?.length && (
          <View style={animeDetailStyles.section}>
            <Text style={animeDetailStyles.sectionTitle}>Recommendations</Text>
            <RecommendationRow
              data={anime.recommendations}
              onPress={openAnime}
            />
          </View>
        )}
      </ScrollView>
      <DetailNavigation />
    </View>
  );
}
