import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
    spacing,
    typhography,
} from '@/theme';

export const errorStateStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xxxl,
    },

    title: {
        color: colors.danger,
        fontSize: typhography.subheading,
        fontWeight: '700',
        marginTop: spacing.lg,
        textAlign: 'center',
    },

    message: {
        color: colors.caption,
        fontSize: typhography.body,
        textAlign: 'center',
        marginTop: spacing.sm,
        lineHeight: 22,
    },

    button: {
        marginTop: spacing.xl,
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        paddingHorizontal: spacing.xxl,
        paddingVertical: spacing.md,
    },

    buttonText: {
        color: colors.text,
        fontSize: typhography.body,
        fontWeight: '600',
    },
});