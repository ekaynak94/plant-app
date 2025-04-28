import React, { useState, useRef } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import PagerView from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";

const steps = [
  {
    title: require("@/assets/images/onboarding-1-title.png"),
    content: require("@/assets/images/onboarding-1-content.png"),
  },
  {
    title: require("@/assets/images/onboarding-2-title.png"),
    content: require("@/assets/images/onboarding-2-content.png"),
  },
  {
    title: require("@/assets/images/onboarding-3-title.png"),
    content: require("@/assets/images/onboarding-3-content.png"),
  },
];

export default function Onboarding() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      pagerRef.current?.setPage(currentStep + 1);
      setCurrentStep(currentStep + 1);
    } else {
      router.replace("/(tabs)");
    }
  };

  return (
    <View className="flex-1 py-safe">
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        onPageSelected={(e) => setCurrentStep(e.nativeEvent.position)}
      >
        {steps.map((step, index) => (
          <View key={index} className="flex-1 items-start justify-start">
            <Image
              source={step.title}
              className="w-auto h-[20%] my-4 px-4"
              resizeMode="contain"
            />
            <Image
              source={step.content}
              className="w-[100%] h-auto"
              resizeMode="contain"
            />
          </View>
        ))}
      </PagerView>
      <View className="absolute bottom-0 w-full h-[30%] pt-24">
        <LinearGradient
          colors={["#FFFFFF00", "#FFFFFFFF"]}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
        <Pressable
          onPress={handleNext}
          className="bg-[#28AF6E] px-6 py-3 mx-4 mb-2 rounded-lg items-center"
        >
          <Text className="text-white font-bold">
            {currentStep === 0 ? "Get Started" : "Continue"}
          </Text>
        </Pressable>

        {currentStep === 0 ? (
          <Text className="text-[#597165B2] text-xs text-center mt-4 mx-4">
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </Text>
        ) : (
          <View className="flex-row justify-center items-center mt-4">
            {steps.map((_, index) => (
              <View
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentStep === index ? "bg-[#13231B] w-4 h-4" : "bg-black/25"
                }`}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
