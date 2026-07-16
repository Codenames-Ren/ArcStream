export type StreamType = "hls" | "mp4" | "embed" | "unknown";

export function detectStreamType(url: string): StreamType {
  if (!url) {
    return "unknown";
  }

  const lowerUrl = url.toLowerCase();

  // Native HLS stream
  if (lowerUrl.includes(".m3u8")) {
    return "hls";
  }

  // Native MP4 stream
  if (lowerUrl.includes(".mp4")) {
    return "mp4";
  }

  // Known embed/player providers
  if (
    lowerUrl.includes("embed") ||
    lowerUrl.includes("mega.nz") ||
    lowerUrl.includes("desustream") ||
    lowerUrl.includes("vidhide") ||
    lowerUrl.includes("dstream")
  ) {
    return "embed";
  }

  return "unknown";
}

export function isNativeStream(url: string): boolean {
  const type = detectStreamType(url);

  return type === "hls" || type === "mp4";
}

export function isEmbedStream(url: string): boolean {
  return detectStreamType(url) === "embed";
}
