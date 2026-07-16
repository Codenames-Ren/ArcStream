import { episodeNavigationStyles } from "@/styles/common";
import { EpisodeNavigation as EpisodeNavigationType } from "@/types";
import { Pressable, Text, View } from "react-native";

interface EpisodeNavigationProps {
  previous?: EpisodeNavigationType | null;
  next?: EpisodeNavigationType | null;
  onPrevious?: (episodeId: string) => void;
  onNext?: (episodeId: string) => void;
}

export default function EpisodeNavigation({
  previous,
  next,
  onPrevious,
  onNext,
}: EpisodeNavigationProps) {
  return (
    <View style={episodeNavigationStyles.container}>
      <Pressable
        disabled={!previous}
        onPress={() => {
          if (previous && onPrevious) {
            onPrevious(previous.episodeId);
          }
        }}
        style={[
          episodeNavigationStyles.button,
          episodeNavigationStyles.buttonLeft,
          !previous && episodeNavigationStyles.buttonDisabled,
        ]}
      >
        <Text
          style={[
            episodeNavigationStyles.label,
            !previous && episodeNavigationStyles.labelDisabled,
          ]}
        >
          Previous
        </Text>

        {previous && (
          <Text numberOfLines={1} style={episodeNavigationStyles.title}>
            {previous.title}
          </Text>
        )}
      </Pressable>

      <Pressable
        disabled={!next}
        onPress={() => {
          if (next && onNext) {
            onNext(next.episodeId);
          }
        }}
        style={[
          episodeNavigationStyles.button,
          episodeNavigationStyles.buttonRight,
          !next && episodeNavigationStyles.buttonDisabled,
        ]}
      >
        <Text
          style={[
            episodeNavigationStyles.label,
            !next && episodeNavigationStyles.labelDisabled,
          ]}
        >
          Next
        </Text>

        {next && (
          <Text numberOfLines={1} style={episodeNavigationStyles.title}>
            {next.title}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
