import { memo, useMemo, useState } from "react";

import { Pressable, Text, View } from "react-native";

import { alphabetFilterStyles } from "@/styles/common";

const ALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

interface AlphabetFilterProps {
  value: string;

  onChange: (value: string) => void;
}

function AlphabetFilter({ value, onChange }: AlphabetFilterProps) {
  const [open, setOpen] = useState(false);

  const alphabetRows = useMemo(() => {
    const rows: string[][] = [];

    for (let i = 0; i < ALPHABET.length; i += 5) {
      rows.push(ALPHABET.slice(i, i + 5));
    }

    return rows;
  }, []);

  function selectFilter(value: string) {
    onChange(value);

    setOpen(false);
  }

  return (
    <View style={alphabetFilterStyles.container}>
      <View style={alphabetFilterStyles.topRow}>
        <Pressable
          onPress={() => selectFilter("All")}
          style={({ pressed }) => [
            alphabetFilterStyles.filterButton,

            value === "All" && alphabetFilterStyles.filterButtonActive,

            pressed && alphabetFilterStyles.pressed,
          ]}
        >
          <Text
            style={[
              alphabetFilterStyles.filterText,

              value === "All" && alphabetFilterStyles.filterTextActive,
            ]}
          >
            All
          </Text>
        </Pressable>

        <Pressable
          onPress={() => selectFilter("0-9")}
          style={({ pressed }) => [
            alphabetFilterStyles.filterButton,

            value === "0-9" && alphabetFilterStyles.filterButtonActive,

            pressed && alphabetFilterStyles.pressed,
          ]}
        >
          <Text
            style={[
              alphabetFilterStyles.filterText,

              value === "0-9" && alphabetFilterStyles.filterTextActive,
            ]}
          >
            0-9
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOpen(!open)}
          style={({ pressed }) => [
            alphabetFilterStyles.alphabetButton,

            pressed && alphabetFilterStyles.pressed,
          ]}
        >
          <Text style={alphabetFilterStyles.filterText}>
            {/^[A-Z]$/.test(value) ? value : "Alphabet"}
          </Text>

          <Text style={alphabetFilterStyles.arrow}>{open ? "▲" : "▼"}</Text>
        </Pressable>
      </View>

      {open && (
        <View style={alphabetFilterStyles.dropdown}>
          {alphabetRows.map((row, index) => (
            <View key={index} style={alphabetFilterStyles.alphabetRow}>
              {row.map((letter) => {
                const active = value === letter;

                return (
                  <Pressable
                    key={letter}
                    onPress={() => selectFilter(letter)}
                    style={({ pressed }) => [
                      alphabetFilterStyles.alphabetItem,

                      active && alphabetFilterStyles.alphabetItemActive,

                      pressed && alphabetFilterStyles.pressed,
                    ]}
                  >
                    <Text
                      style={[
                        alphabetFilterStyles.alphabetText,

                        active && alphabetFilterStyles.alphabetTextActive,
                      ]}
                    >
                      {letter}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default memo(AlphabetFilter);
