import React from "react";
import { View, Text, StatusBar } from "react-native";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";
import QuestionList from "@/components/QuestionList";
import CategoryList from "../../components/CategoryList";

export default function HomeScreen() {
  return (
    <View className="pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" />
      <SubscriptionButton className="m-4" />
      <Text className="m-4 text-lg font-bold text-[#13231B]">Get Started</Text>
      <QuestionList className="px-4" />
      <CategoryList className="px-4" />
    </View>
  );
}
