import { synopsisSectionStyles } from "@/styles/anime";
import { Anime } from "@/types";
import { Text, View } from "react-native";

interface SynopsisSectionProps {
  anime: Anime;
}

export default function SynopsisSection({ anime }: SynopsisSectionProps) {
  if (!anime.synopsis) {
    return null;
  }

  return (
    <View style={synopsisSectionStyles.container}>
      <Text style={synopsisSectionStyles.title}>Synopsis</Text>

      <Text style={synopsisSectionStyles.text}>{anime.synopsis}</Text>
    </View>
  );
}
