import { colors, radius, spacing, typhography } from '@/theme';
import { StyleSheet } from 'react-native';

export const heroBannerStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 420,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius.xl,
        backgroundColor: colors.surface,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        paddingHorizontal: spacing.xl,
        paddingTop: spacing.xl,
        paddingBottom: spacing.xxl,
        backgroundColor: 'rgba(0,0,0,0.45)',
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: spacing.sm,
        marginBottom: spacing.md,
    },

    title: {
        color: colors.text,
        fontSize: typhography.display,
        fontWeight: '800',
        lineHeight: 40,
    },

    synopsis: {
        color: colors.subtitle,
        fontSize: typhography.body,
        lineHeight: 22,
        marginTop: spacing.md,
    },

    information: {
        marginTop: spacing.lg,
        gap: spacing.xs,
    },

    info: {
        color: colors.subtitle,
        fontSize: typhography.caption,
        lineHeight: 18,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacing.md,
        marginTop: spacing.xl,
    },

    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: radius.full,
        gap: spacing.sm,
        minHeight: 48,
    },

    secondaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.12)',
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: radius.full,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.18)',
        gap: spacing.sm,
        minHeight: 48,
    },

    primaryButtonText: {
        color: colors.text,
        fontSize: typhography.body,
        fontWeight: '700',
    },

    secondaryButtonText: {
        color: colors.text,
        fontSize: typhography.body,
        fontWeight: '600',
    },

    primaryButtonPressed: {
        opacity: 0.85,
        transform: [
            {
                scale: 0.97,
            },
        ],
    },

    secondaryButtonPressed: {
        opacity: 0.8,
        transform: [
            {
                scale: 0.97,
            },
        ],
    },
});