import AnimeCard from "@/components/anime/AnimeCard";
import { animeGridStyles } from "@/styles/anime/AnimeGrid.styles";
import { Anime } from "@/types";
import { FlatList, View } from "react-native";

interface AnimeGridProps {
  data: Anime[];
  onPress?: (anime: Anime) => void;
  showScore?: boolean;
  showEpisode?: boolean;
  showUpdate?: boolean;
  showGenres?: boolean;
}

export default function AnimeGrid({
  data,
  onPress,
  showScore = true,
  showEpisode = true,
  showUpdate = false,
  showGenres = false,
}: AnimeGridProps) {
  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={animeGridStyles.content}
      columnWrapperStyle={animeGridStyles.row}
      renderItem={({ item }) => (
        <View style={animeGridStyles.card}>
          <AnimeCard
            anime={item}
            onPress={() => onPress?.(item)}
            showScore={showScore}
            showEpisode={showEpisode}
            showUpdate={showUpdate}
            showGenres={showGenres}
          />
        </View>
      )}
    />
  );
}
