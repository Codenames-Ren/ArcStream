import { useCallback, useEffect, useRef, useState } from "react";

import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    useWindowDimensions,
    View,
} from "react-native";

import HeroBanner from "./HeroBanner";

import { heroCarouselStyles } from "@/styles/anime";

import { Anime } from "@/types";

interface HeroCarouselProps {
  data: Anime[];

  height?: number;

  autoPlay?: boolean;

  interval?: number;

  onPrimaryPress?: (anime: Anime) => void;

  onSecondaryPress?: (anime: Anime) => void;
}

export default function HeroCarousel({
  data,

  height = 420,

  autoPlay = true,

  interval = 5000,

  onPrimaryPress,

  onSecondaryPress,
}: HeroCarouselProps) {
  const { width } = useWindowDimensions();

  const flatListRef = useRef<FlatList<Anime>>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);

      timerRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (!autoPlay || data.length <= 1 || timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => {
      const next =
        currentIndexRef.current >= data.length - 1
          ? 0
          : currentIndexRef.current + 1;

      flatListRef.current?.scrollToIndex({
        index: next,
        animated: true,
      });

      currentIndexRef.current = next;

      setCurrentIndex(next);
    }, interval);
  }, [autoPlay, data.length, interval]);

  useEffect(() => {
    startAutoPlay();

    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  function onScrollBeginDrag() {
    stopAutoPlay();
  }

  function onMomentumScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);

    currentIndexRef.current = index;

    setCurrentIndex(index);

    startAutoPlay();
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        windowSize={3}
        removeClippedSubviews
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onScrollBeginDrag={onScrollBeginDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <View
            style={[
              heroCarouselStyles.itemContainer,
              {
                width,
              },
            ]}
          >
            <HeroBanner
              anime={item}
              height={height}
              onPrimaryPress={() => onPrimaryPress?.(item)}
              onSecondaryPress={() => onSecondaryPress?.(item)}
            />
          </View>
        )}
      />

      {data.length > 1 && (
        <View style={heroCarouselStyles.pagination}>
          {data.map((_, index) => (
            <View
              key={index}
              style={
                index === currentIndex
                  ? heroCarouselStyles.dotActive
                  : heroCarouselStyles.dotInactive
              }
            />
          ))}
        </View>
      )}
    </View>
  );
}
