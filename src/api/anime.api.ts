import { http } from "@/lib/axios";

export const animeApi = {
  home() {
    return http.get("/home");
  },

  animeList() {
    return http.get("/anime");
  },

  completed(page = 1) {
    return http.get("/completed", {
      params: {
        page,
      },
    });
  },

  detail(slug: string) {
    return http.get(`/anime/${slug}`);
  },

  search(keyword: string) {
    return http.get("/search", {
      params: {
        keyword,
      },
    });
  },

  genres() {
    return http.get("/genres");
  },

  genre(slug: string, page = 1) {
    return http.get(`/genres/${slug}`, {
      params: {
        page,
      },
    });
  },

  stream(episodeId: string) {
    return http.get(`/stream/${episodeId}`);
  },

  streamServer(serverId: string) {
    return http.get(`/stream/server/${serverId}`);
  },
};
