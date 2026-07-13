import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

interface UseSearchAnimeOptions {
  enabled?: boolean;
}

export function useSearchAnime(
  keyword: string,
  options?: UseSearchAnimeOptions,
) {
  const query = keyword.trim();

  return useQuery({
    queryKey: QUERY_KEY.search(query),

    queryFn: () => animeService.search(query),

    enabled: options?.enabled ?? query.length > 0,

    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
