import AnimeRow from "@/components/anime/AnimeRow";
import HeroCarousel from "@/components/anime/HeroCarousel";
import CatLoader from "@/components/common/CatLoader";
import DetailNavigation from "@/components/common/DetailNavigation";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import SearchBar from "@/components/common/SearchBar";
import { useHome } from "@/hooks";
import { animeService } from "@/services/anime.service";
import { homeStyles } from "@/styles/screens";
import { colors } from "@/theme";
import { Image } from "expo-image";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  BackHandler,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";

export default function HomeScreen() {
  const homeQuery = useHome();
  const [refreshing, setRefreshing] = useState(false);
  const lastBackPress = useRef(0);
  useFocusEffect(
    useCallback(() => {
      function onBackPress() {
        const now = Date.now();

        if (now - lastBackPress.current < 2000) {
          BackHandler.exitApp();
          return true;
        }

        lastBackPress.current = now;
        ToastAndroid.show(
          "Tekan sekali lagi untuk keluar dari aplikasi",
          ToastAndroid.SHORT,
        );
        return true;
      }

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  function openAnime(id: string) {
    router.push({
      pathname: "/anime/[id]",
      params: {
        id,
      },
    });
  }

  function openList(type: "ongoing" | "completed") {
    router.push({
      pathname: "/list/[type]",
      params: {
        type,
      },
    });
  }

  async function watchNow(slug: string) {
    try {
      const detail = await animeService.detail(slug);

      const latestEpisode = detail.episodes?.[0];

      if (!latestEpisode) {
        openAnime(slug);
        return;
      }

      router.push({
        pathname: "/player/[episodeId]",
        params: {
          episodeId: latestEpisode.episodeId,
        },
      });
    } catch {
      openAnime(slug);
    }
  }

  async function onRefresh() {
    try {
      setRefreshing(true);
      await homeQuery.refetch();
    } finally {
      setRefreshing(false);
    }
  }

  if (homeQuery.isPending) {
    return <CatLoader message="Loading~" />;
  }

  if (homeQuery.isError || !homeQuery.data) {
    return (
      <ErrorState
        title="Oops!"
        message="Failed to load anime."
        buttonText="Retry"
        onRetry={onRefresh}
      />
    );
  }

  const home = homeQuery.data;
  const heroData = Array.from(
    new Map(
      [...(home.hero ? [home.hero] : []), ...home.ongoing].map((anime) => [
        anime.id,
        anime,
      ]),
    ).values(),
  ).slice(0, 7);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={homeStyles.container}
        contentContainerStyle={homeStyles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
      >
        <View style={homeStyles.header}>
          <View style={homeStyles.logoContainer}>
            <Image
              source={require("@/assets/images/icon.png")}
              style={homeStyles.logoIcon}
              contentFit="contain"
            />

            <Text style={homeStyles.logo}>Arc Stream</Text>
          </View>
        </View>

        <View style={homeStyles.searchContainer}>
          <SearchBar
            value=""
            editable={false}
            placeholder="Search anime..."
            onPress={() => router.push("/search")}
          />
        </View>

        {!!heroData.length && (
          <View style={homeStyles.heroContainer}>
            <HeroCarousel
              data={heroData}
              onPrimaryPress={(anime) => watchNow(anime.url)}
              onSecondaryPress={(anime) => openAnime(anime.url)}
            />
          </View>
        )}

        <View style={homeStyles.section}>
          {home.ongoing.length ? (
            <AnimeRow
              title="Ongoing Anime"
              subtitle="Currently Airing"
              data={home.ongoing}
              showEpisode
              showUpdate
              onPress={(anime) => openAnime(anime.url)}
              onExpand={() => openList("ongoing")}
            />
          ) : (
            <EmptyState title="Ongoing Anime" message="No anime available." />
          )}
        </View>

        {!!home.completed.length && (
          <View style={homeStyles.section}>
            <AnimeRow
              title="Completed Anime"
              subtitle="Finished Series"
              data={home.completed}
              showTotalEpisode
              onPress={(anime) => openAnime(anime.url)}
              onExpand={() => openList("completed")}
            />
          </View>
        )}

        {!!home.random.length && (
          <View style={homeStyles.section}>
            <AnimeRow
              title="Random Anime"
              subtitle="You might like these"
              data={home.random}
              onPress={(anime) => openAnime(anime.url)}
            />
          </View>
        )}
      </ScrollView>
      <DetailNavigation />
    </View>
  );
}
