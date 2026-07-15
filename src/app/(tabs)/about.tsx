import DetailNavigation from "@/components/common/DetailNavigation";
import { aboutStyles } from "@/styles/screens";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={aboutStyles.container}>
      <View style={aboutStyles.content}>
        <View style={aboutStyles.logoWrapper}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={aboutStyles.logo}
            contentFit="contain"
          />
        </View>

        <Text style={aboutStyles.title}>Arc Stream</Text>
        <Text style={aboutStyles.version}>Version 1.0.0</Text>

        <Text style={aboutStyles.description}>
          Anime streaming application built with React Native and Arc Gateway
          API.
        </Text>
        <View style={aboutStyles.divider} />
        <Text style={aboutStyles.sectionTitle}>Built With</Text>

        <View style={aboutStyles.techContainer}>
          <View style={aboutStyles.techItem}>
            <Text style={aboutStyles.techText}>React Native</Text>
          </View>

          <View style={aboutStyles.techItem}>
            <Text style={aboutStyles.techText}>Expo</Text>
          </View>
        </View>
        <View style={aboutStyles.divider} />
        <Text style={aboutStyles.footer}>Made with ❤️ for anime lovers</Text>
      </View>
      <DetailNavigation />
    </View>
  );
}
