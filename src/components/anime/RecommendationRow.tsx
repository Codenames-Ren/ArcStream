import { memo } from "react";

import { FlatList } from "react-native";

import AnimeCard from "@/components/anime/AnimeCard";

import { recommendationRowStyles } from "@/styles/anime";

import { AnimeRecommendation } from "@/types";

interface RecommendationRowProps {
  data: AnimeRecommendation[];

  onPress?: (id: string) => void;
}

function RecommendationRow({
  data,

  onPress,
}: RecommendationRowProps) {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={recommendationRowStyles.content}
      ItemSeparatorComponent={() => <></>}
      keyExtractor={(item) => item.animeId}
      renderItem={({ item }) => (
        <AnimeCard
          anime={{
            id: item.animeId,
            url: item.animeId,
            title: item.title,
            cover: item.poster,
          }}
          onPress={() => onPress?.(item.animeId)}
        />
      )}
    />
  );
}

export default memo(RecommendationRow);
