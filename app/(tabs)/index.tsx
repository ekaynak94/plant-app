import React from "react";
import { View, Text, TextInput, StatusBar, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { greeting: "Good Morning", emoji: "☀️" };
    if (hour < 18) return { greeting: "Good Afternoon", emoji: "🌤️" };
    return { greeting: "Good Evening", emoji: "🌙" };
  };

  const { greeting, emoji } = getGreeting();

  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className=" relative overflow-hidden">
        <Image
          source={require("@/assets/images/header-left.png")}
          style={styles.headerLeftImage}
        />
        <Image
          source={require("@/assets/images/header-right.png")}
          style={styles.headerRightImage}
        />
        <View className="border-b-[0.2px] border-gray-300 px-4 pb-4">
          <Text className="text-sm text-text">Hi, plant lover!</Text>
          <Text className="text-2xl text-text font-bold mt-2">
            {greeting}! {emoji}
          </Text>
          <View className="mt-4 flex-row items-center bg-white rounded-lg p-3 border-[0.2px] border-gray-300">
            <Image
              style={{ width: 20, height: 20, marginRight: 8 }}
              source={require("@/assets/icons/search.svg")}
              tintColor="#ABABAB"
            />
            <TextInput
              placeholder="Search for plants"
              placeholderTextColor="#ABABAB"
              className="text-text"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

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
