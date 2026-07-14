import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
    spacing,
    typhography,
} from '@/theme';

export const episodeCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: spacing.md,
        marginBottom: spacing.md,
    },

    episodeNumber: {
        color: colors.primary,
        fontSize: typhography.body,
        fontWeight: '700',
        width: 48,
    },

    content: {
        flex: 1,
        marginLeft: spacing.md,
    },

    title: {
        color: colors.text,
        fontSize: typhography.body,
        fontWeight: '600',
    },

    duration: {
        color: colors.caption,
        fontSize: typhography.caption,
        marginTop: spacing.xs,
    },
});