import { animeService } from "@/services/anime.service";
import { useQuery } from "@tanstack/react-query";

export function useOngoingAnime(page = 1) {
    return useQuery({
        queryKey: ["ongoing-anime", page],
        queryFn: () => animeService.ongoing(page),
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 30,
        retry: 2, 
    });
}