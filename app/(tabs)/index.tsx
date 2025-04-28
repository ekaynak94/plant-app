import React, { useRef } from "react";
import { View, Text, StatusBar, Animated } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";
import QuestionList from "@/components/QuestionList";
import CategoryList from "../../components/CategoryList";

export default function HomeScreen() {
  const discountOfferCount = useSelector(
    (state: RootState) => state.subscription.discountOfferCount
  );

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" scrollY={scrollY} />
      <CategoryList
        className="pl-4 pb-8"
        listHeader={
          <View>
            {discountOfferCount !== 0 && (
              <SubscriptionButton
                className="my-4 mr-4"
                badgeCount={discountOfferCount}
              />
            )}
            <Text className="my-4 mr-4 text-lg font-bold text-[#13231B]">
              Get Started
            </Text>
            <QuestionList />
          </View>
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}
