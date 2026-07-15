import { animeMetaStyles } from "@/styles/anime";
import { Anime } from "@/types";
import { Text, View } from "react-native";

interface AnimeMetaProps {
  anime: Anime;
}

export default function AnimeMeta({ anime }: AnimeMetaProps) {
  const items = [
    {
      label: "Type",
      value: anime.type,
    },
    {
      label: "Status",
      value: anime.status,
    },
    {
      label: "Episodes",
      value: anime.totalEpisode ? String(anime.totalEpisode) : "-",
    },
    {
      label: "Duration",
      value: anime.duration,
    },
    {
      label: "Studio",
      value: anime.studio,
    },
    {
      label: "Aired",
      value: anime.releaseDate,
    },
    {
      label: "Producers",
      value: anime.producers,
    },
  ];

  return (
    <View style={animeMetaStyles.container}>
      {items.map((item) => (
        <View key={item.label} style={animeMetaStyles.row}>
          <Text style={animeMetaStyles.label}>{item.label}</Text>

          <Text style={animeMetaStyles.value} numberOfLines={2}>
            {item.value || "-"}
          </Text>
        </View>
      ))}
    </View>
  );
}
