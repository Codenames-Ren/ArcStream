import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { colors } from '@/theme';

export default function PlayerScreen() {
    const { chapter } = useLocalSearchParams<{
        chapter: string;
    }>();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    color: colors.text,
                }}
            >
                Video Player
            </Text>

            <Text
                style={{
                    color: colors.caption,
                    marginTop: 8,
                }}
            >
                {chapter}
            </Text>
        </View>
    );
}