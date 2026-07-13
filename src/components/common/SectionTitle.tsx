import { sectionTitleStyles } from "@/styles/common";
import { Text, View } from "react-native";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle,
}: SectionTitleProps) {
    return (
        <View style={sectionTitleStyles.container}>
            <Text style={sectionTitleStyles.title}>
                {title}
            </Text>

            {subtitle ? (
                <Text style={sectionTitleStyles.subtitle}>
                    {subtitle}
                </Text>
            ) : null}
        </View>
    );
}