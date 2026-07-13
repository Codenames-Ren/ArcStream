import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

interface UseGenresOptions {
  slug?: string;
  page?: number;
}

export function useGenres(options?: UseGenresOptions) {
  const { slug, page = 1 } = options ?? {};

  return useQuery({
    queryKey: slug ? QUERY_KEY.genre(slug, page) : QUERY_KEY.genres,

    queryFn: () =>
      slug ? animeService.genre(slug, page) : animeService.genres(),

    enabled: !slug || slug.length > 0,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
