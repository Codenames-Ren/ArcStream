import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
    spacing,
    typhography,
} from '@/theme';

export const searchBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: radius.full,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        gap: spacing.sm,
    },

    input: {
        flex: 1,
        color: colors.text,
        fontSize: typhography.body,
        padding: 0,
    },

    icon: {
        color: colors.caption,
    },

    clearButton: {
        padding: spacing.xs,
    },
});