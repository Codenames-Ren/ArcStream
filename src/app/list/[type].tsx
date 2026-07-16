import AnimeCard from "@/components/anime/AnimeCard";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import PageJump from "@/components/common/PageJump";
import Pagination from "@/components/common/Pagination";
import { useCompletedAnime } from "@/hooks/useCompletedAnime";
import { animeService } from "@/services/anime.service";
import { listStyles } from "@/styles/screens";
import { Anime } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

const ITEMS_PER_PAGE = 16;

export default function AnimeListScreen() {
  const params = useLocalSearchParams<{
    type: string;
  }>();

  const type = params.type ?? "ongoing";
  const isCompleted = type === "completed";
  const [page, setPage] = useState(1);
  const backendPage = isCompleted ? Math.ceil(page / 2) : 1;
  const completedQuery = useCompletedAnime(backendPage);

  const ongoingQuery = useQuery({
    queryKey: ["ongoing-anime"],

    queryFn: async () => {
      const home = await animeService.home();

      return home.ongoing;
    },

    enabled: !isCompleted,
  });

  const listQuery = isCompleted ? completedQuery : ongoingQuery;

  function openAnime(id: string) {
    router.replace({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  if (listQuery.isPending) {
    return <CatLoader message="Loading anime~" />;
  }

  if (listQuery.isError) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load anime list."
        buttonText="Retry"
        onRetry={() => listQuery.refetch()}
      />
    );
  }

  const title = isCompleted ? "Completed Anime" : "Ongoing Anime";

  const animeList: Anime[] = isCompleted
    ? (completedQuery.data?.list ?? [])
    : (ongoingQuery.data ?? []);

  if (!animeList.length) {
    return <EmptyState title={title} message="No anime available." />;
  }

  const backendTotalPages = completedQuery.data?.totalPage ?? 1;
  const totalPage = isCompleted
    ? backendTotalPages * 2
    : Math.max(1, Math.ceil(animeList.length / ITEMS_PER_PAGE));

  const localPage = page % 2 === 0 ? 2 : 1;
  const startIndex = isCompleted
    ? (localPage - 1) * ITEMS_PER_PAGE
    : (page - 1) * ITEMS_PER_PAGE;

  const currentData = animeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function changePage(nextPage: number) {
    setPage(nextPage);
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        key={`${type}-${page}`}
        style={listStyles.container}
        contentContainerStyle={listStyles.content}
        data={currentData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={listStyles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={listStyles.header}>
              <Text style={listStyles.title}>{title}</Text>

              <Text style={listStyles.subtitle}>
                Browse all {title.toLowerCase()}
              </Text>
            </View>

            <PageJump
              currentPage={page}
              totalPage={totalPage}
              onChange={changePage}
            />
          </>
        }
        renderItem={({ item }) => (
          <View style={listStyles.card}>
            <AnimeCard
              anime={item}
              width="100%"
              onPress={() => openAnime(item.url)}
            />
          </View>
        )}
        ListFooterComponent={
          totalPage > 1 ? (
            <Pagination page={page} total={totalPage} onChange={changePage} />
          ) : null
        }
      />

      <DetailNavigation />
    </View>
  );
}
