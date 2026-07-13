import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

export function useAnimeList() {
  return useQuery({
    queryKey: QUERY_KEY.animeList,

    queryFn: animeService.animeList,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
