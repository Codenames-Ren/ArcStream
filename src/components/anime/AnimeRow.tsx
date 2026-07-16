import SectionHeader from "@/components/anime/SectionHeader";
import { animeRowStyles } from "@/styles/anime";
import { spacing } from "@/theme";
import { Anime } from "@/types";
import { DimensionValue, FlatList, View } from "react-native";
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
  onExpand?: () => void;
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
  onExpand,
}: AnimeRowProps) {
  return (
    <View style={animeRowStyles.container}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        actionText={onExpand ? "See All" : undefined}
        onActionPress={onExpand}
      />

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
