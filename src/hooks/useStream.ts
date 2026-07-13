import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query";
import { animeService } from "@/services/anime.service";

interface UseStreamOptions {
  serverId?: string;
}

export function useStream(episodeId: string, options?: UseStreamOptions) {
  const serverId = options?.serverId;

  const streamQuery = useQuery({
    queryKey: QUERY_KEY.stream(episodeId),

    queryFn: () => animeService.stream(episodeId),

    enabled: !!episodeId,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const serverQuery = useQuery({
    queryKey: QUERY_KEY.streamServer(serverId ?? ""),

    queryFn: () => animeService.streamServer(serverId!),

    enabled: !!serverId,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    stream: streamQuery,
    server: serverQuery,
  };
}
