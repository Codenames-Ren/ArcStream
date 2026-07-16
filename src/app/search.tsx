import AnimeCard from "@/components/anime/AnimeCard";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";
import { useSearchAnime } from "@/hooks";
import { searchStyles } from "@/styles/screens";
import { Anime } from "@/types";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, View } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const searchQuery = useSearchAnime(query);
  const pageSize = 16;
  const data = searchQuery.data ?? [];
  const totalPage = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  function submitSearch() {
    setPage(1);
    setQuery(keyword.trim());
  }

  function openAnime(id: string) {
    router.push({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  function clearSearch() {
    setKeyword("");
    setQuery("");
    setPage(1);
  }

  if (searchQuery.isPending && query) {
    return <CatLoader message="Searching~" />;
  }

  if (searchQuery.isError) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to search anime."
        buttonText="Retry"
        onRetry={() => searchQuery.refetch()}
      />
    );
  }

  return (
    <View style={searchStyles.container}>
      <FlatList
        style={searchStyles.list}
        contentContainerStyle={searchStyles.content}
        data={paginatedData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={searchStyles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={searchStyles.header}>
            <SearchBar
              value={keyword}
              onChangeText={setKeyword}
              onSubmitEditing={submitSearch}
              placeholder="Search anime..."
              loading={searchQuery.isFetching}
              onClear={clearSearch}
            />
          </View>
        }
        renderItem={({ item }: { item: Anime }) => (
          <View style={searchStyles.card}>
            <AnimeCard
              anime={item}
              width="100%"
              onPress={() => openAnime(item.id)}
            />
          </View>
        )}
        ListFooterComponent={
          totalPage > 1 ? (
            <View style={searchStyles.pagination}>
              <Pagination page={page} total={totalPage} onChange={setPage} />
            </View>
          ) : null
        }
        ListEmptyComponent={
          query.length === 0 ? (
            <EmptyState
              title="Search Anime"
              message="Type something to search."
            />
          ) : (
            <EmptyState title="No Result" message="Anime not found." />
          )
        }
      />

      <DetailNavigation />
    </View>
  );
}
