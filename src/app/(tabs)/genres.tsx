import GenreItem from "@/components/anime/GenreItem";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { useGenres } from "@/hooks";
import { genresStyles } from "@/styles/screens";
import { colors } from "@/theme";
import { Genre } from "@/types";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

export default function GenresScreen() {
  const genresQuery = useGenres();

  const [refreshing, setRefreshing] = useState(false);

  function openGenre(slug: string) {
    router.push({
      pathname: "/genre/[slug]",
      params: {
        slug,
      },
    });
  }

  async function onRefresh() {
    try {
      setRefreshing(true);

      await genresQuery.refetch();
    } finally {
      setRefreshing(false);
    }
  }

  if (genresQuery.isPending) {
    return <CatLoader message="Loading genres~" />;
  }

  if (genresQuery.isError) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load genres."
        buttonText="Retry"
        onRetry={() => genresQuery.refetch()}
      />
    );
  }

  const genres = genresQuery.data ?? [];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        style={genresStyles.container}
        contentContainerStyle={genresStyles.content}
        data={genres}
        keyExtractor={(item) => item.genreId}
        numColumns={2}
        columnWrapperStyle={genresStyles.row}
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
            <Text style={genresStyles.title}>Genres</Text>
            <Text style={genresStyles.subtitle}>Browse anime by genre</Text>
          </>
        }
        ListEmptyComponent={
          <EmptyState title="Genres" message="No genres available." />
        }
        renderItem={({ item }: { item: Genre }) => (
          <GenreItem
            genre={item}
            onPress={(genre) => openGenre(genre.genreId)}
          />
        )}
      />
      <DetailNavigation />
    </View>
  );
}
