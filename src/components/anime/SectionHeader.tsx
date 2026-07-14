import { sectionHeaderStyles } from "@/styles/anime/SectionHeader.styles";
import { Text, TouchableOpacity, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionPress?: () => void;
}

export default function SectionHeader({
  title,
  subtitle,
  actionText,
  onActionPress,
}: SectionHeaderProps) {
  return (
    <View style={sectionHeaderStyles.container}>
      <View style={sectionHeaderStyles.textContainer}>
        <Text style={sectionHeaderStyles.title}>{title}</Text>

        {subtitle && (
          <Text style={sectionHeaderStyles.subtitle}>{subtitle}</Text>
        )}
      </View>

      {actionText && (
        <TouchableOpacity
          style={sectionHeaderStyles.action}
          onPress={onActionPress}
          disabled={!onActionPress}
          activeOpacity={0.7}
        >
          <Text style={sectionHeaderStyles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
