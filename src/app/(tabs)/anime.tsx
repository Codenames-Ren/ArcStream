import AnimeListItem from "@/components/anime/AnimeListItem";
import AlphabetFilter from "@/components/common/AlphabetFilter";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { useAnimeList } from "@/hooks";
import { animeStyles } from "@/styles/screens";
import { colors } from "@/theme";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

export default function AnimeScreen() {
  const animeQuery = useAnimeList();

  const [filter, setFilter] = useState("All");

  const [refreshing, setRefreshing] = useState(false);

  function openAnime(id: string) {
    router.push({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  async function onRefresh() {
    try {
      setRefreshing(true);

      await animeQuery.refetch();
    } finally {
      setRefreshing(false);
    }
  }

  const filteredAnime = useMemo(() => {
    const list = animeQuery.data ?? [];

    if (filter === "All") {
      return list;
    }

    if (filter === "0-9") {
      return list.filter((anime) => /^[0-9]/.test(anime.title.trim()));
    }

    return list.filter((anime) =>
      anime.title.trim().toUpperCase().startsWith(filter),
    );
  }, [animeQuery.data, filter]);

  if (animeQuery.isPending) {
    return <CatLoader message="Loading anime list~" />;
  }

  if (animeQuery.isError) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load anime list."
        buttonText="Retry"
        onRetry={() => animeQuery.refetch()}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        style={animeStyles.container}
        contentContainerStyle={animeStyles.content}
        data={filteredAnime}
        keyExtractor={(item, index) => item.id || String(index)}
        numColumns={2}
        columnWrapperStyle={animeStyles.row}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        ListHeaderComponent={
          <>
            <Text style={animeStyles.title}>Anime List</Text>
            <Text style={animeStyles.subtitle}>Browse all available anime</Text>
            <AlphabetFilter value={filter} onChange={setFilter} />
          </>
        }
        ListEmptyComponent={
          <EmptyState title="Anime List" message="No anime available." />
        }
        renderItem={({ item }) => (
          <AnimeListItem
            anime={item}
            onPress={(anime) => openAnime(anime.url)}
          />
        )}
      />
      <DetailNavigation />
    </View>
  );
}
