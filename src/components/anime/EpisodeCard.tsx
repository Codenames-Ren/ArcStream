import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { episodeCardStyles } from '@/styles/anime';
import { colors } from '@/theme';

interface EpisodeCardProps {
    title: string;
    episode?: string;
    duration?: string;
    onPress?: () => void;
}

export default function EpisodeCard({
    title,
    episode,
    duration,
    onPress,
}: EpisodeCardProps) {
    return (
        <Pressable
            style={episodeCardStyles.container}
            onPress={onPress}
        >
            <View style={episodeCardStyles.content}>
                {episode ? (
                    <Text style={episodeCardStyles.episodeNumber}>
                        Episode {episode}
                    </Text>
                ) : null}

                <Text
                    style={episodeCardStyles.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>

                {duration ? (
                    <Text style={episodeCardStyles.duration}>
                        {duration}
                    </Text>
                ) : null}
            </View>

            <Feather
                name="play-circle"
                size={24}
                color={colors.primary}
            />
        </Pressable>
    );
}