import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
    shadows,
    spacing,
    typhography,
} from '@/theme';

export const animeCardStyles = StyleSheet.create({
    container: {
        marginRight: spacing.lg,
    },

    poster: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: radius.lg,
        overflow: 'hidden',
        backgroundColor: colors.card,
        ...shadows.card,
    },

    overlay: {
        position: 'absolute',
        top: spacing.sm,
        left: spacing.sm,
        right: spacing.sm,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    content: {
        marginTop: spacing.md,
        gap: spacing.xs,
    },

    title: {
        color: colors.text,
        fontSize: typhography.body,
        fontWeight: '700',
        lineHeight: 20,
    },

    episode: {
        color: colors.caption,
        fontSize: typhography.caption,
    },

    update: {
        color: colors.subtitle,
        fontSize: typhography.small,
    },

    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.xs,
        marginTop: spacing.xs,
    },
});