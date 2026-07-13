import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
} from '@/theme';

export const networkImageStyles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: radius.md,
        backgroundColor: colors.card,
    },

    placeholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.surface,
        zIndex: 1,
    },

    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.card,
        borderRadius: radius.md,
    },
});