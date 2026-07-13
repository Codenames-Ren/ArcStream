import { StyleSheet } from 'react-native';

import {
    colors,
    radius,
} from '@/theme';

export const skeletonStyles = StyleSheet.create({
    skeleton: {
        backgroundColor: colors.card,
        borderRadius: radius.md,
    },
});