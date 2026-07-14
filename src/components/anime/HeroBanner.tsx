import GenreBadge from '@/components/anime/GenreBadge';
import ScoreBadge from '@/components/anime/ScoreBadge';
import NetworkImage from '@/components/common/NetworkImage';
import { heroBannerStyles } from '@/styles/anime';
import { colors, radius, spacing } from '@/theme';
import { Anime } from '@/types';
import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

interface HeroBannerProps {
    anime: Anime;
    height?: number;
    maxGenres?: number;
    showScore?: boolean;
    showGenres?: boolean;
    showSynopsis?: boolean;
    showInformation?: boolean;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryPress?: () => void;
    onSecondaryPress?: () => void;
}

export default function HeroBanner({
    anime,
    height = 420,
    maxGenres = 3,
    showScore = true,
    showGenres = true,
    showSynopsis = true,
    showInformation = true,
    primaryButtonText = 'Watch Now',
    secondaryButtonText = 'Details',
    onPrimaryPress,
    onSecondaryPress,
}: HeroBannerProps) {

    return (
        <View style={[heroBannerStyles.container,
        {
            height,
            marginTop: spacing.md,
            borderRadius: radius.xl,
            overflow: 'hidden',
        },
        ]}>

            <NetworkImage
                uri={anime.cover}
                borderRadius={radius.xl}
                containerStyle={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />

            <View style={heroBannerStyles.overlay}>
                {(showScore || showGenres) && (
                    <View style={heroBannerStyles.footer}>
                        {showScore && anime.score && (
                            <ScoreBadge score={anime.score} />
                        )}

                        {showGenres && (anime.genre ?? [])
                            .slice(0, maxGenres)
                            .map((genre) => (
                                <GenreBadge key={genre} genre={genre} />
                            ))}
                    </View>
                )}

                <Text style={heroBannerStyles.title} numberOfLines={2}>
                    {anime.title || '-'}
                </Text>

                {showSynopsis && !!anime.synopsis && (
                    <Text style={heroBannerStyles.synopsis} numberOfLines={4}>
                        {anime.synopsis}
                    </Text>
                )}

                {showInformation && (
                    <View style={[heroBannerStyles.information,
                    {
                        flexWrap: 'wrap',
                    },
                    ]}>

                        {!!anime.studio && (
                            <Text style={heroBannerStyles.info}>
                                Studio • {anime.studio}
                            </Text>
                        )}

                        {!!anime.status && (
                            <Text style={heroBannerStyles.info}>
                                Status • {anime.status}
                            </Text>
                        )}

                        {!!anime.totalEpisode && (
                            <Text style={heroBannerStyles.info}>
                                Episodes • {anime.totalEpisode}
                            </Text>
                        )}

                        {!!anime.releaseDate && (
                            <Text style={heroBannerStyles.info}>
                                Release • {anime.releaseDate}
                            </Text>
                        )}
                    </View>
                )}

                <View
                    style={[heroBannerStyles.buttonContainer,
                    {
                        marginTop: spacing.lg,
                    },
                    ]}>

                    <Pressable
                        style={({ pressed }) => [
                            heroBannerStyles.primaryButton,
                            pressed && heroBannerStyles.primaryButtonPressed,
                        ]}
                        onPress={onPrimaryPress}
                        disabled={!onPrimaryPress}
                        hitSlop={8}>

                        <Feather name="play" size={18} color={colors.text} />
                        <Text style={heroBannerStyles.primaryButtonText}>
                            {primaryButtonText}
                        </Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            heroBannerStyles.secondaryButton,
                            pressed && heroBannerStyles.secondaryButtonPressed,
                        ]}
                        onPress={onSecondaryPress}
                        disabled={!onSecondaryPress}
                        hitSlop={8}>
                            
                        <Feather name="info" size={18} color={colors.text} />
                        <Text style={heroBannerStyles.secondaryButtonText}>
                            {secondaryButtonText}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}