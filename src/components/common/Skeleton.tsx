import { skeletonStyles } from "@/styles/common";
import { radius } from "@/theme";
import { DimensionValue, View } from "react-native";

interface SkeletonProps {
    width?: DimensionValue;
    height?: DimensionValue;
    borderRadius?: number;
}

export default function Skeleton({
    width = '100%',
    height = 20,
    borderRadius = radius.md,
}: SkeletonProps) {
    return (
        <View style={[skeletonStyles.skeleton,
        {
            width,
            height,
            borderRadius,
        },
        ]}
        />
    );
}