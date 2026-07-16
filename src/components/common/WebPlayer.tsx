import { webPlayerStyles } from "@/styles/common";
import { lockLandscape, lockPortrait } from "@/utils/orientation.utils";
import {
  fullscreenDetectScript,
  webViewAdBlockScript,
} from "@/utils/webview.utils";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

interface WebPlayerProps {
  url: string;
}

export default function WebPlayer({ url }: WebPlayerProps) {
  if (!url) {
    return (
      <View style={webPlayerStyles.container}>
        <View style={webPlayerStyles.error}>
          <Text style={webPlayerStyles.errorText}>
            Video source unavailable.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={webPlayerStyles.container}>
      <WebView
        source={{
          uri: url,
        }}
        style={webPlayerStyles.webView}
        javaScriptEnabled
        domStorageEnabled
        allowsFullscreenVideo
        mediaPlaybackRequiresUserAction={false}
        setSupportMultipleWindows={false}
        injectedJavaScriptBeforeContentLoaded={
          webViewAdBlockScript + fullscreenDetectScript
        }
        injectedJavaScript={webViewAdBlockScript + fullscreenDetectScript}
        onMessage={(event) => {
          try {
            const data = JSON.parse(event.nativeEvent.data);

            if (data.type === "fullscreen") {
              if (data.active) {
                lockLandscape();
              } else {
                lockPortrait();
              }
            }
          } catch {
            // ignore invalid message
          }
        }}
        onShouldStartLoadWithRequest={(request) => {
          const blockedKeywords = [
            "pyppo",
            "popunder",
            "popup",
            "adsterra",
            "doubleclick",
            "intent:",
          ];

          return !blockedKeywords.some((item) =>
            request.url.toLowerCase().includes(item),
          );
        }}
      />
    </View>
  );
}
