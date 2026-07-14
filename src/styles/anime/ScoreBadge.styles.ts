import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
    spacing,
    typhography,
} from '@/theme';

export const scoreBadgeStyles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.success,
        borderRadius: radius.full,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        alignSelf: 'flex-start',
    },

    score: {
        color: colors.text,
        fontSize: typhography.caption,
        fontWeight: '700',
    },
});