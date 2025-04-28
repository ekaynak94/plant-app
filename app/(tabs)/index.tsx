import React from "react";
import { View, Text, StatusBar } from "react-native";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";
import QuestionList from "@/components/QuestionList";
import CategoryList from "../../components/CategoryList";

export default function HomeScreen() {
  return (
    <View className="flex-1 pt-safe pb-8 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" />
      <CategoryList
        className="pl-4"
        listHeader={
          <View>
            <SubscriptionButton className="my-4 mr-4" />
            <Text className="my-4 mr-4 text-lg font-bold text-[#13231B]">
              Get Started
            </Text>
            <QuestionList />
          </View>
        }
      />
    </View>
  );
}
