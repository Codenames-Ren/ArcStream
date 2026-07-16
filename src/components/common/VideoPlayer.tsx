import { videoPlayerStyles } from "@/styles/common";
import { lockLandscape, lockPortrait } from "@/utils/orientation.utils";

import { VideoView, useVideoPlayer } from "expo-video";

import { Text, View } from "react-native";

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const player = useVideoPlayer(
    {
      uri: url,
    },

    (player) => {
      player.loop = false;
    },
  );

  if (!url) {
    return (
      <View style={videoPlayerStyles.container}>
        <View style={videoPlayerStyles.error}>
          <Text style={videoPlayerStyles.errorText}>
            Video source unavailable.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={videoPlayerStyles.container}>
      <VideoView
        player={player}
        style={{
          flex: 1,
        }}
        nativeControls
        onFullscreenEnter={() => {
          lockLandscape();
        }}
        onFullscreenExit={() => {
          lockPortrait();
        }}
      />
    </View>
  );
}
