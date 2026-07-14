import AnimeGrid from "@/components/anime/AnimeGrid";

import CatLoader from "@/components/common/CatLoader";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import SearchBar from "@/components/common/SearchBar";

import { useSearchAnime } from "@/hooks";

import { colors, spacing } from "@/theme";

import { router } from "expo-router";

import { useEffect, useState } from "react";

import { ScrollView } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(keyword.trim());
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const searchQuery = useSearchAnime(query);

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
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
      contentContainerStyle={{
        padding: spacing.lg,
      }}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Search anime..."
        loading={searchQuery.isFetching}
        onClear={clearSearch}
      />

      {query.length === 0 ? (
        <EmptyState title="Search Anime" message="Type something to search." />
      ) : searchQuery.data?.length ? (
        <AnimeGrid
          data={searchQuery.data}
          onPress={(anime) => openAnime(anime.url)}
        />
      ) : (
        <EmptyState title="No Result" message="Anime not found." />
      )}
    </ScrollView>
  );
}
