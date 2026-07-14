import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { colors } from '@/theme';

export default function AnimeDetailScreen() {
    const { id } = useLocalSearchParams<{
        id: string;
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
                Anime Detail
            </Text>

            <Text
                style={{
                    color: colors.caption,
                    marginTop: 8,
                }}
            >
                {id}
            </Text>
        </View>
    );
}