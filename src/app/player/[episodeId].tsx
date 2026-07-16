import RecommendationRow from "@/components/anime/RecommendationRow";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EpisodeNavigation from "@/components/common/EpisodeNavigation";
import ErrorState from "@/components/common/ErrorState";
import ServerSelector from "@/components/common/ServerSelector";
import VideoPlayer from "@/components/common/VideoPlayer";
import WebPlayer from "@/components/common/WebPlayer";
import { animeService } from "@/services/anime.service";
import { playerStyles } from "@/styles/screens";
import {
  Anime,
  AnimeRecommendation,
  StreamResponse,
  StreamServer,
} from "@/types";
import { detectStreamType } from "@/utils/stream.utils";
import { useKeepAwake } from "expo-keep-awake";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function PlayerScreen() {
  const params = useLocalSearchParams<{
    episodeId: string;
  }>();

  const episodeId = params.episodeId;
  const [stream, setStream] = useState<StreamResponse | null>(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [selectedServer, setSelectedServer] = useState("");
  const [relatedAnime, setRelatedAnime] = useState<AnimeRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useKeepAwake();

  async function loadRecommendation(animeId: string) {
    try {
      const detail = await animeService.detail(animeId);

      const genre = detail.genre?.[0]?.genreId;

      if (!genre) {
        return;
      }

      const result = await animeService.genre(genre, 1);

      const recommendations = result.list
        .filter((anime: Anime) => anime.id !== animeId)
        .slice(0, 8)
        .map((anime: Anime) => ({
          title: anime.title,
          poster: anime.cover,
          animeId: anime.id,
        }));

      setRelatedAnime(recommendations);
    } catch {
      setRelatedAnime([]);
    }
  }

  async function loadStream() {
    try {
      setLoading(true);
      setError(false);

      const data = await animeService.stream(episodeId);

      setStream(data);

      setCurrentUrl(data.streamingUrl);

      const defaultServer = data.servers.find(
        (server: StreamServer) => server.title === data.defaultServer,
      );

      setSelectedServer(
        defaultServer?.serverId ?? data.servers[0]?.serverId ?? "",
      );

      if (data.animeId) {
        loadRecommendation(data.animeId);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStream();
  }, [episodeId]);

  async function changeServer(serverId: string) {
    try {
      setSelectedServer(serverId);

      const data = await animeService.streamServer(serverId);

      setCurrentUrl(data.streamingUrl);
    } catch {
      // keep current stream
    }
  }

  function openEpisode(nextEpisodeId: string) {
    router.replace({
      pathname: "/player/[episodeId]",
      params: {
        episodeId: nextEpisodeId,
      },
    });
  }

  function openAnime(id: string) {
    router.replace({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  if (loading) {
    return <CatLoader message="Loading stream~" />;
  }

  if (error || !stream) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load stream."
        buttonText="Retry"
        onRetry={loadStream}
      />
    );
  }

  const streamType = detectStreamType(currentUrl);

  return (
    <View style={playerStyles.container}>
      <ScrollView
        contentContainerStyle={playerStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={playerStyles.title}>{stream.title}</Text>

        <View style={playerStyles.playerContainer}>
          {streamType === "hls" || streamType === "mp4" ? (
            <VideoPlayer url={currentUrl} />
          ) : (
            <WebPlayer url={currentUrl} />
          )}
        </View>

        <Text style={playerStyles.quality}>Quality: {stream.quality}</Text>

        <View style={playerStyles.section}>
          <ServerSelector
            servers={stream.servers}
            selectedServer={selectedServer}
            onChange={changeServer}
          />
        </View>

        <View style={playerStyles.section}>
          <EpisodeNavigation
            previous={stream.prevEpisode}
            next={stream.nextEpisode}
            onPrevious={openEpisode}
            onNext={openEpisode}
          />
        </View>

        {relatedAnime.length > 0 && (
          <View style={playerStyles.section}>
            <Text style={playerStyles.sectionTitle}>You May Also Like</Text>

            <RecommendationRow data={relatedAnime} onPress={openAnime} />
          </View>
        )}
      </ScrollView>

      <DetailNavigation />
    </View>
  );
}
