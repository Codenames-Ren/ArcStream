export interface Anime {
  id: string;
  url: string;
  title: string;
  cover: string;

  latestEpisode?: string | number | null;
  latestUpdate?: string;
  genre?: AnimeGenre[];
  synopsis?: string;
  studio?: string;
  score?: string;
  status?: string;
  releaseDate?: string;
  totalEpisode?: number | null;
  type?: string;
  duration?: string;
  japaneseTitle?: string;
  producers?: string;
  season?: string;
  episodes?: AnimeEpisode[];
  connections?: AnimeConnection[];
  recommendations?: AnimeRecommendation[];
}

export interface AnimeGenre {
  title: string;
  genreId: string;
}

export interface AnimeEpisode {
  title: string;
  episodeId: string;
  episode: number;
  date: string;
}

export interface AnimeConnection {
  title: string;
  animeId: string;
}

export interface AnimeRecommendation {
  title: string;
  poster: string;
  animeId: string;
}

export interface Genre {
  title: string;
  genreId: string;
}
