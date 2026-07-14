import { DimensionValue, FlatList, View } from "react-native";

import SectionTitle from "@/components/common/SectionTitle";

import { animeRowStyles } from "@/styles/anime";
import { Anime } from "@/types";

import { spacing } from "@/theme";
import AnimeCard from "./AnimeCard";

interface AnimeRowProps {
  title: string;
  subtitle?: string;
  data: Anime[];
  cardWidth?: DimensionValue;
  horizontal?: boolean;
  showScore?: boolean;
  showEpisode?: boolean;
  showTotalEpisode?: boolean;
  showUpdate?: boolean;
  showGenres?: boolean;
  maxGenres?: number;
  contentPadding?: number;
  showsHorizontalScrollIndicator?: boolean;
  onPress?: (anime: Anime) => void;
}

export default function AnimeRow({
  title,
  subtitle,
  data,
  cardWidth = 150,
  horizontal = true,
  showScore = true,
  showEpisode = true,
  showTotalEpisode = false,
  showUpdate = false,
  showGenres = false,
  maxGenres = 2,
  contentPadding = spacing.lg,
  showsHorizontalScrollIndicator = false,
  onPress,
}: AnimeRowProps) {
  return (
    <View style={animeRowStyles.container}>
      <SectionTitle title={title} subtitle={subtitle} />

      <FlatList
        horizontal={horizontal}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimeCard
            anime={item}
            width={cardWidth}
            showScore={showScore}
            showEpisode={showEpisode}
            showTotalEpisode={showTotalEpisode}
            showUpdate={showUpdate}
            showGenres={showGenres}
            maxGenres={maxGenres}
            onPress={() => onPress?.(item)}
          />
        )}
        contentContainerStyle={[
          animeRowStyles.listContent,
          {
            paddingHorizontal: contentPadding,
          },
        ]}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        removeClippedSubviews
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
      />
    </View>
  );
}
