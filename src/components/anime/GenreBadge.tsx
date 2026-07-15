import { genreBadgeStyles } from "@/styles/anime";
import { Pressable, Text, View } from "react-native";

interface GenreBadgeProps {
  genre: string;
  onPress?: () => void;
}

export default function GenreBadge({ genre, onPress }: GenreBadgeProps) {
  return (
    <View style={genreBadgeStyles.badge}>
      <Pressable onPress={onPress}>
        <Text style={genreBadgeStyles.text}>{genre}</Text>
      </Pressable>
    </View>
  );
}
