import { animeService } from "@/services/anime.service";
import { useQuery } from "@tanstack/react-query";

export function useCompletedAnime(page = 1) {
  return useQuery({
    queryKey: ["completed-anime", page],

    queryFn: () => animeService.completed(page),

    staleTime: 1000 * 60 * 10,

    gcTime: 1000 * 60 * 30,

    retry: 2,
  });
}
