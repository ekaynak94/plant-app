import React from "react";
import { View, Text, StyleSheet, TextInput, Animated } from "react-native";
import { Image } from "expo-image";
import Icon from "@/components/Icon";

type HeaderProps = {
  className?: string;
  scrollY: Animated.Value;
};

const Header: React.FC<HeaderProps> = ({ className, scrollY }) => {
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [120, 80], // Adjusted to keep the search bar visible
    extrapolate: "clamp",
  });

  const textOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0], // Fade out text as the header collapses
    extrapolate: "clamp",
  });

  const textScale = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.8], // Shrink text as the header collapses
    extrapolate: "clamp",
  });

  const searchBarTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -40], // Move the search bar up as the header collapses
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        height: headerHeight,
        backgroundColor: "white",
        zIndex: 10,
        elevation: 10,
      }}
      className={`relative overflow-hidden border-b-[0.2px] border-[#3C3C4340] pb-4 ${className}`}
    >
      <Image
        source={require("@/assets/images/header-left.png")}
        style={styles.headerLeftImage}
      />
      <Image
        source={require("@/assets/images/header-right.png")}
        style={styles.headerRightImage}
      />
      <Animated.View
        style={{ opacity: textOpacity, transform: [{ scale: textScale }] }}
      >
        <Text className="text-[#13231B]">Hi, plant lover!</Text>
        <Text className="text-2xl text-[#13231B] font-bold mt-2">
          {getGreeting().greeting}! {getGreeting().emoji}
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: searchBarTranslateY }],
        }}
        className="mt-4 flex-row items-center bg-white rounded-lg p-3 border-[0.2px] border-[#3C3C4340]"
      >
        <Icon
          source={require("@/assets/icons/search.svg")}
          size={20}
          color="#ABABAB"
        />
        <TextInput
          placeholder="Search for plants"
          placeholderTextColor="#ABABAB"
          className="text-[#13231B] ml-2"
        />
      </Animated.View>
    </Animated.View>
  );
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return { greeting: "Good Morning", emoji: "☀️" };
  if (hour < 18) return { greeting: "Good Afternoon", emoji: "🌤️" };
  return { greeting: "Good Evening", emoji: "🌙" };
};

const styles = StyleSheet.create({
  headerLeftImage: {
    zIndex: -1,
    elevation: -1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 122.4,
    height: 99.68,
    opacity: 0.5,
    transformOrigin: "center",
    transform: [
      { translateX: "-50%" },
      { translateY: "50%" },
      { rotate: "197.61 deg" },
    ],
  },
  headerRightImage: {
    zIndex: -1,
    elevation: -1,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 98.8,
    height: 86.6,
    opacity: 0.5,
    transformOrigin: "center",
    transform: [
      { translateX: "20%" },
      { translateY: "30%" },
      { rotate: "180 deg" },
    ],
  },
});

export default Header;
