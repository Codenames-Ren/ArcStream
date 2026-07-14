import { scoreBadgeStyles } from "@/styles/anime";
import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface ScoreBadgeProps {
    score: string | number;
}

export default function ScoreBadge({
    score,
}: ScoreBadgeProps) {
    return (
        <View style={scoreBadgeStyles.badge}>
            <Feather name="star" size={12} color={colors.text} />
            <Text style={scoreBadgeStyles.score}>
                {score}
            </Text>
        </View>
    );
}