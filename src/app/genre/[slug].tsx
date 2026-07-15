import AnimeCard from "@/components/anime/AnimeCard";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import GenreDetail from "@/components/common/GenreDetail";
import PageJump from "@/components/common/PageJump";
import Pagination from "@/components/common/Pagination";
import { useGenres } from "@/hooks";
import { genreDetailScreenStyles } from "@/styles/screens";
import { Anime } from "@/types";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, View } from "react-native";

export default function GenreDetailScreen() {
  const params = useLocalSearchParams<{
    slug: string;
  }>();

  const slug = params.slug;
  const [page, setPage] = useState(1);

  const genreQuery = useGenres({
    slug,
    page,
  });

  function openAnime(id: string) {
    router.push({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  if (genreQuery.isPending) {
    return <CatLoader message="Loading genre anime~" />;
  }

  if (genreQuery.isError || !genreQuery.data) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load genre anime."
        buttonText="Retry"
        onRetry={() => genreQuery.refetch()}
      />
    );
  }

  const data = genreQuery.data;
  const totalPage = Math.ceil(data.total / 16);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        style={genreDetailScreenStyles.container}
        contentContainerStyle={genreDetailScreenStyles.content}
        data={data.list}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={genreDetailScreenStyles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <GenreDetail genre={data.genre} total={data.total} />

            <PageJump
              currentPage={data.page}
              totalPage={totalPage}
              onChange={setPage}
            />
          </>
        }
        renderItem={({ item }: { item: Anime }) => (
          <View style={genreDetailScreenStyles.card}>
            <AnimeCard
              anime={item}
              width={"100%"}
              onPress={() => openAnime(item.url)}
            />
          </View>
        )}
        ListFooterComponent={
          data.list.length > 0 ? (
            <Pagination page={data.page} total={totalPage} onChange={setPage} />
          ) : null
        }
        ListEmptyComponent={
          <EmptyState title="Anime" message="No anime available." />
        }
      />

      <DetailNavigation />
    </View>
  );
}
