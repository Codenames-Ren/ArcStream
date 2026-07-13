import { errorStateStyles } from "@/styles/common";
import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface ErrorStateProps {
    title?: string;
    message?: string;
    buttonText?: string;
    onRetry?: () => void;
}

export default function ErrorState({
    title = 'Something Went Wrong',
    message = 'An unexpected error occured. Please try again later.',
    buttonText = 'Retry',
    onRetry,
}: ErrorStateProps) {
    return (
        <View style={errorStateStyles.container}>
            <Feather name="alert-circle" size={64} color={colors.danger} />
            <Text style={errorStateStyles.title}>
                {title}
            </Text>

            <Text style={errorStateStyles.message}>
                {message}
            </Text>

            {onRetry ? (
                <Pressable
                    style={errorStateStyles.button}
                    onPress={onRetry}>
                    <Text style={errorStateStyles.buttonText}>
                        {buttonText}
                    </Text>
                </Pressable>
            ) : null}
        </View>
    );
}