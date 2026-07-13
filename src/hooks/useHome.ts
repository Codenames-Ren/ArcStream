import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

export function useHome() {
  return useQuery({
    queryKey: QUERY_KEY.home,

    queryFn: animeService.home,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
