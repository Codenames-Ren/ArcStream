import { genreDetailStyles } from "@/styles/common";
import { Text, View } from "react-native";

interface GenreDetailProps {
  genre: string;
  total?: number;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function GenreDetail({ genre, total }: GenreDetailProps) {
  const genreName = capitalize(genre);

  return (
    <View style={genreDetailStyles.container}>
      <Text style={genreDetailStyles.title}>{genreName} Anime</Text>
      <Text style={genreDetailStyles.subtitle}>
        Browse anime with {genreName} genre
      </Text>
      {total !== undefined && (
        <Text style={genreDetailStyles.count}>Total: {total} anime</Text>
      )}
    </View>
  );
}
