import { animeApi } from "@/api/anime.api";
import { normalizeAnime } from "@/mappers/anime.mapper";
import { Anime } from "@/types";

export const animeService = {
  async home() {
    const { data } = await animeApi.home();

    const home = data.data ?? data;

    return {
      hero: home.hero ? normalizeAnime(home.hero) : null,

      ongoing: home.ongoing ? home.ongoing.map(normalizeAnime) : [],

      completed: home.completed ? home.completed.map(normalizeAnime) : [],

      random: home.random ? home.random.map(normalizeAnime) : [],
    };
  },

  async animeList(): Promise<Anime[]> {
    const { data } = await animeApi.animeList();

    return data.list.map(normalizeAnime);
  },

  async detail(slug: string): Promise<Anime> {
    const { data } = await animeApi.detail(slug);

    return normalizeAnime(data);
  },

  async search(keyword: string): Promise<Anime[]> {
    const { data } = await animeApi.search(keyword);

    return data.result.map(normalizeAnime);
  },

  async genres() {
    const { data } = await animeApi.genres();

    return data.genres;
  },

  async genre(slug: string, page = 1) {
    const { data } = await animeApi.genre(slug, page);

    return data;
  },

  async stream(episodeId: string) {
    const { data } = await animeApi.stream(episodeId);

    return data;
  },

  async streamServer(serverId: string) {
    const { data } = await animeApi.streamServer(serverId);

    return data;
  },
};
