import { searchBarStyles } from "@/styles/common";
import { colors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput } from "react-native";

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  loading?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  onClear?: () => void;
  onPress?: () => void;
}

export default function SearchBar({
  value = "",
  onChangeText,
  onSubmitEditing,
  placeholder = "Search",
  loading = false,
  editable = true,
  autoFocus = false,
  onClear,
  onPress,
}: SearchBarProps) {
  return (
    <Pressable onPress={onPress} style={searchBarStyles.container}>
      <Feather name="search" size={20} color={colors.caption} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={colors.caption}
        editable={editable}
        autoFocus={autoFocus}
        returnKeyType="search"
        style={searchBarStyles.input}
      />

      {loading ? (
        <Feather name="loader" size={18} color={colors.primary} />
      ) : value.length > 0 && onClear ? (
        <Pressable
          onPress={onClear}
          hitSlop={8}
          style={searchBarStyles.clearButton}
        >
          <Feather name="x-circle" size={20} color={colors.caption} />
        </Pressable>
      ) : null}
    </Pressable>
  );
}
