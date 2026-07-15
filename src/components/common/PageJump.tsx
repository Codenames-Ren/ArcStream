import { useState } from "react";

import { Pressable, Text, TextInput, View } from "react-native";

import { pageJumpStyles } from "@/styles/common";

interface PageJumpProps {
  currentPage: number;

  totalPage: number;

  onChange: (page: number) => void;
}

export default function PageJump({
  currentPage,

  totalPage,

  onChange,
}: PageJumpProps) {
  const [value, setValue] = useState(String(currentPage));

  function submit() {
    const page = Number(value);

    if (!page || page < 1 || page > totalPage) {
      setValue(String(currentPage));

      return;
    }

    onChange(page);
  }

  return (
    <View style={pageJumpStyles.container}>
      <Text style={pageJumpStyles.label}>Go to page</Text>

      <TextInput
        style={pageJumpStyles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="number-pad"
        maxLength={4}
        selectTextOnFocus
      />

      <Pressable style={pageJumpStyles.button} onPress={submit}>
        <Text style={pageJumpStyles.buttonText}>GO</Text>
      </Pressable>
    </View>
  );
}
