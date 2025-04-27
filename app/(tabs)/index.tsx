import React, { useEffect, useState } from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";
import { getQuestions, Question } from "@/api/service";

export default function HomeScreen() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        console.log("Fetched questions:", data);
        const fetchedQuestions = data.sort((q1, q2) =>
          q1.id > q2.id ? 1 : -1
        );
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" />
      <SubscriptionButton className="m-4" />
      <View className="px-4 mt-4">
        <Text className="text-lg font-bold text-text">Get Started</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {questions.map((question, index) => (
            <View
              key={index}
              className="bg-[#F5F5F5] p-4 rounded-lg mr-4 items-center justify-center"
            >
              <Text className="text-sm font-medium text-text">
                {question.title}
              </Text>
            </View>
          ))}
        </ScrollView>
        )
      </View>
    </View>
  );
}
