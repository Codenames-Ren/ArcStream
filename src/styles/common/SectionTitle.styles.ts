import { StyleSheet } from 'react-native';

import {
    colors,
    spacing,
    typhography,
} from '@/theme';

export const sectionTitleStyles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,
    },

    title: {
        color: colors.text,
        fontSize: typhography.heading,
        fontWeight: '700',
    },

    subtitle: {
        color: colors.caption,
        fontSize: typhography.caption,
        marginTop: spacing.xs,
    },
});