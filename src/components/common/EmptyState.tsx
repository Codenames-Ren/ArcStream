import { emptyStateStyles } from "@/styles/common";
import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface EmptyStateProps {
    title?: string;
    message?: string;
    buttonText?: string;
    onPress?: () => void;
}

export default function EmptyState({
    title = 'No Data Found',
    message = 'There is nothing to display right now.',
    buttonText,
    onPress,
}: EmptyStateProps) {
    return (
        <View style={emptyStateStyles.container}>
            <Feather name="inbox" size={64} color={colors.caption} />
            <Text style={emptyStateStyles.title}>
                {title}
            </Text>
            <Text style={emptyStateStyles.message}>
                {message}
            </Text>

            {buttonText && onPress ? (
                <Pressable style={emptyStateStyles.button} onPress={onPress}>
                    <Text style={emptyStateStyles.buttonText}>
                        {buttonText}
                    </Text>
                </Pressable>
            ) : null}
        </View>
    )
}