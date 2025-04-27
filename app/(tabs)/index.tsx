import React from "react";
import { View, Text, StatusBar } from "react-native";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";
import QuestionList from "@/components/QuestionList";

export default function HomeScreen() {
  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" />
      <SubscriptionButton className="m-4" />
      <Text className="m-4 text-lg font-bold text-[#13231B]">Get Started</Text>
      <QuestionList className="px-4" />
    </View>
  );
}
