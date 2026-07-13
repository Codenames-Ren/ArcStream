import { StyleSheet } from 'react-native';

import {
    colors,
    spacing,
    typhography,
} from '@/theme';

export const loaderStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.md,
    },

    fullScreen: {
        flex: 1,
        backgroundColor: colors.background,
    },

    message: {
        color: colors.caption,
        fontSize: typhography.body,
        textAlign: 'center',
    },
});