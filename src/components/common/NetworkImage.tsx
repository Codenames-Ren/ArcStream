import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  DimensionValue,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

import { Image, ImageContentFit } from "expo-image";

import { networkImageStyles } from "@/styles/common";
import { colors, radius } from "@/theme";

interface NetworkImageProps {
  uri?: string | null;

  width?: DimensionValue;

  height?: DimensionValue;

  borderRadius?: number;

  contentFit?: ImageContentFit;

  transition?: number;

  containerStyle?: StyleProp<ViewStyle>;

  imageStyle?: StyleProp<ImageStyle>;
}

export default function NetworkImage({
  uri,
  width = "100%",
  height = "100%",
  borderRadius = radius.md,
  contentFit = "cover",
  transition = 300,
  containerStyle,
  imageStyle,
}: NetworkImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setRetry(0);
  }, [uri]);

  function handleError() {
    if (retry < 1 && uri) {
      setRetry((prev) => prev + 1);
      return;
    }

    setLoading(false);
    setError(true);
  }

  const source =
    error || !uri
      ? require("@/assets/images/imageplaceholder.png")
      : {
          uri: retry > 0 ? `${uri}?retry=${Date.now()}` : uri,
        };

  return (
    <View
      style={[
        networkImageStyles.image,
        {
          width,
          height,
          borderRadius,
        },
        containerStyle,
      ]}
    >
      {loading && (
        <View
          style={[
            networkImageStyles.placeholder,
            {
              borderRadius,
            },
          ]}
        >
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      )}

      <Image
        source={source}
        style={[
          {
            width: "100%",
            height: "100%",
            borderRadius,
          },
          imageStyle,
        ]}
        contentFit={contentFit}
        transition={transition}
        cachePolicy="memory-disk"
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
        onError={handleError}
      />
    </View>
  );
}
