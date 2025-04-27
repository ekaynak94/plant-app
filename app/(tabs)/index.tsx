import React from "react";
import { View, StatusBar } from "react-native";
import Header from "@/components/Header";

export default function HomeScreen() {
  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header />
    </View>
  );
}
