import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

export function useAnimeDetail(slug: string) {
  return useQuery({
    queryKey: QUERY_KEY.detail(slug),

    queryFn: () => animeService.detail(slug),

    enabled: !!slug,

    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
