import { genreBadgeStyles } from "@/styles/anime";
import { Text, View } from "react-native";

interface GenreBadgeProps {
    genre: string;
}

export default function GenreBadge({
    genre,
}: GenreBadgeProps) {
    return (
        <View style={genreBadgeStyles.badge}>
            <Text style={genreBadgeStyles.text}>
                {genre}
            </Text>
        </View>
    );
}