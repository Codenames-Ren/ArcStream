import { splashScreenStyles } from "@/styles/common";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";

interface SplashScreenProps {
  onFinish?: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const dot1 = useRef(new Animated.Value(0.3)).current;
  const dot2 = useRef(new Animated.Value(0.3)).current;
  const dot3 = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      Animated.spring(logoScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    const animateDots = (value: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),

          Animated.timing(value, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
          }),

          Animated.timing(value, {
            toValue: 0.3,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();

    animateDots(dot1, 0);
    animateDots(dot2, 200);
    animateDots(dot3, 400);

    const timer = setTimeout(() => {
      onFinish?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={splashScreenStyles.container}>
      <Animated.Image
        source={require("@/assets/images/icon.png")}
        style={[
          splashScreenStyles.logo,
          {
            opacity: logoOpacity,
            transform: [
              {
                scale: logoScale,
              },
            ],
          },
        ]}
      />

      <Text style={splashScreenStyles.title}>Arc Stream</Text>
      <Text style={splashScreenStyles.caption}>Watch anytime, anywhere.</Text>
      <View style={splashScreenStyles.dots}>
        <Animated.Text
          style={[
            splashScreenStyles.dot,
            {
              opacity: dot1,
            },
          ]}
        >
          •
        </Animated.Text>
        <Animated.Text
          style={[
            splashScreenStyles.dot,
            {
              opacity: dot2,
            },
          ]}
        >
          •
        </Animated.Text>
        <Animated.Text
          style={[
            splashScreenStyles.dot,
            {
              opacity: dot3,
            },
          ]}
        >
          •
        </Animated.Text>
      </View>
    </View>
  );
}
