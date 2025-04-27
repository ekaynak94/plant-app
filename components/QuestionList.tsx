import React, { useEffect, useState } from "react";
import {
  Text,
  ImageBackground,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { getQuestions, Question } from "@/api/service";
import * as WebBrowser from "expo-web-browser";

type QuestionListProps = {
  className?: string;
};

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const openInBrowser = async () => {
    await WebBrowser.openBrowserAsync(question.uri);
  };

  return (
    <Pressable
      onPress={openInBrowser}
      className="h-[164px] w-[240px] rounded-lg overflow-hidden mr-4"
    >
      <ImageBackground
        source={{ uri: question.image_uri }}
        className="h-full w-full justify-end"
      >
        <View className="h-[30%] px-4">
          <Text className="text-white font-bold">{question.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const QuestionList: React.FC<QuestionListProps> = ({ className }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className={` ${className}`}
    >
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </ScrollView>
  );
};

export default QuestionList;
