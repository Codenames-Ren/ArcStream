import { Anime, AnimeConnection, AnimeEpisode, AnimeGenre } from "@/types";

export function normalizeAnime(item: any): Anime {
  if (!item) {
    return {
      id: "",
      url: "",
      title: "",
      cover: "",
    };
  }

  return {
    id: String(item.animeId ?? item.id ?? ""),
    url: item.animeId ?? item.url ?? "",
    title: item.title ?? item.judul ?? "",
    cover: item.poster ?? item.cover ?? "",
    latestEpisode: item.lastch ?? item.latestEpisode ?? item.episode ?? null,
    latestUpdate: item.lastup ?? item.latestUpdate ?? "",
    genre: normalizeGenres(item.genres ?? item.genre),

    synopsis: Array.isArray(item.synopsis)
      ? item.synopsis.join("\n\n")
      : (item.synopsis ?? ""),

    studio: item.studios ?? item.studio ?? "",

    score:
      item.score !== undefined && item.score !== null
        ? String(item.score)
        : undefined,

    status: item.status ?? "",
    releaseDate: item.aired ?? item.rilis ?? item.releaseDate ?? "",
    season: item.season ?? "",
    totalEpisode:
      item.episodes ?? item.total_episode ?? item.totalEpisode ?? null,
    type: item.type ?? "",
    duration: item.duration ?? "",
    japaneseTitle: item.japanese ?? item.japaneseTitle ?? "",
    producers: item.producers ?? "",

    episodes: Array.isArray(item.episodeList)
      ? item.episodeList.map(normalizeEpisode)
      : undefined,

    connections: Array.isArray(item.connections)
      ? item.connections.map(normalizeConnection)
      : undefined,

    recommendations: Array.isArray(item.recommendations)
      ? item.recommendations.map(normalizeRecommendation)
      : undefined,
  };
}

function normalizeGenres(value: any): AnimeGenre[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value

    .map((item): AnimeGenre | null => {
      if (typeof item === "string") {
        return {
          title: item,
          genreId: item.toLowerCase().replace(/\s+/g, "-"),
        };
      }

      const title = item.title ?? item.name ?? "";
      const genreId = item.genreId ?? item.id ?? "";

      if (!title || !genreId) {
        return null;
      }

      return {
        title,
        genreId,
      };
    })

    .filter((item): item is AnimeGenre => item !== null);
}

function normalizeEpisode(item: any): AnimeEpisode {
  return {
    title: item.title ?? "",
    episodeId: item.episodeId ?? item.id ?? "",
    episode: Number(item.episode ?? 0),
    date: item.date ?? "",
  };
}

function normalizeConnection(item: any): AnimeConnection {
  return {
    title: item.title ?? "",
    animeId: item.animeId ?? item.id ?? "",
  };
}

function normalizeRecommendation(item: any) {
  return {
    title: item.title ?? "",
    poster: item.poster ?? "",
    animeId: item.animeId ?? item.id ?? "",
  };
}
