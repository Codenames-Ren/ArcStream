export const QUERY_KEY = {
  home: ["home"] as const,

  animeList: ["anime", "list"] as const,

  detail: (slug: string) => ["anime", "detail", slug] as const,

  search: (keyword: string) => ["anime", "search", keyword] as const,

  genres: ["genres"] as const,

  genre: (slug: string, page: number = 1) => ["genres", slug, page] as const,

  stream: (episodeId: string) => ["stream", episodeId] as const,

  streamServer: (serverId: string) => ["stream", "server", serverId] as const,
} as const;
