import { Anime, Genre } from "./anime";

export interface ApiResponse<T> {
  success?: boolean;
  message?: string;
  data: T;
}

export interface Pagination {
  page: number;
  totalPage?: number;
  totalData?: number;
}

export interface HomeResponse {
  hero?: Anime | null;
  ongoing: Anime[];
  completed: Anime[];
  random: Anime[];
}

export interface GenreResponse {
  genres: Genre[];
}

export interface StreamResponse {
  title: string;
  animeId: string;
  episodeId: string;
  quality: string;
  defaultServer: string;
  streamingUrl: string;
  servers: StreamServer[];
  hasPrevEpisode: boolean;
  hasNextEpisode: boolean;
  prevEpisode?: EpisodeNavigation | null;
  nextEpisode?: EpisodeNavigation | null;
}

export interface StreamServer {
  title: string;
  serverId: string;
}

export interface EpisodeNavigation {
  title: string;
  episodeId: string;
}

export interface ServerStreamResponse {
  streamingUrl: string;
}
