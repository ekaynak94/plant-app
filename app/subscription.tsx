import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import Icon from "@/components/Icon";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

type Feature = {
  icon: any;
  title: string;
  subtitle: string;
};

type Plan = {
  title: string;
  subtitle: string;
  discount?: string;
};

const features: Feature[] = [
  {
    icon: require("@/assets/icons/scan.svg"),
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    icon: require("@/assets/icons/speedometer.svg"),
    title: "Faster",
    subtitle: "Process",
  },
  {
    icon: require("@/assets/icons/my-garden.svg"),
    title: "Detailed",
    subtitle: "Plant Care",
  },
];

const plans: Plan[] = [
  {
    title: "1 Month",
    subtitle: "$2.99/month, auto renewable",
  },
  {
    title: "1 Year",
    subtitle: "First 3 days free, then $529.99/year",
    discount: "Save 50%",
  },
];

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
  <View className="w-[156px] h-[130px] rounded-2xl mr-4 p-4 overflow-hidden relative">
    <BlurView intensity={20} tint="light" className="absolute inset-0" />
    <View className="w-12 h-12 bg-black/25 rounded-2xl items-center justify-center mb-4">
      <Icon source={feature.icon} size={24} color="white" />
    </View>
    <Text className="text-white font-bold text-sm">{feature.title}</Text>
    <Text className="text-[#FFFFFFB2] text-xs mt-1">{feature.subtitle}</Text>
  </View>
);

const PlanItem: React.FC<{
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ plan, isSelected, onSelect }) => (
  <Pressable
    onPress={onSelect}
    className={`flex-row items-center p-4 rounded-2xl overflow-hidden relative ${
      plan.discount
        ? "border-2 border-[#28AF6E]"
        : "border-[0.5px] border-[#FFFFFF4D]"
    }`}
  >
    {plan.discount ? (
      <LinearGradient
        colors={["#28AF6E3D", "#28AF6E00"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      />
    ) : (
      <BlurView
        intensity={20}
        tint="light"
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      />
    )}
    {plan.discount && (
      <View className="absolute top-0 right-0 bg-[#28AF6E] p-2 rounded-bl-2xl">
        <Text className="text-white text-xs font-bold">{plan.discount}</Text>
      </View>
    )}
    <View
      className={`w-6 h-6 rounded-full mr-4 items-center justify-center ${
        isSelected ? "bg-white border-8 border-[#28AF6E]" : "bg-[#FFFFFF4D]"
      }`}
    />
    <View>
      <Text className="text-white font-bold">{plan.title}</Text>
      <Text className="text-[#FFFFFFB2] text-xs">{plan.subtitle}</Text>
    </View>
  </Pressable>
);

export default function SubscriptionModal() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<number>(plans.length - 1);

  const closeModal = () => {
    router.back();
  };

  return (
    <View className="relative flex-1 bg-[#101E17]">
      <Image
        source={require("@/assets/images/subscription-background.png")}
        style={{ width: "100%", height: "60%" }}
      />
      <Pressable
        onPress={closeModal}
        className="absolute top-safe right-4 bg-black/40 rounded-full items-center justify-center w-10 h-10"
      >
        <Icon
          source={require("@/assets/icons/close.svg")}
          size={24}
          color="white"
        />
      </Pressable>
      <View className="absolute bottom-0 w-full min-h-[60%] pb-safe">
        <Text className="mx-4 text-white text-2xl font-bold">
          PlantApp <Text className="font-normal">Premium</Text>
        </Text>
        <Text className="mx-4 text-white text-sm mt-2">
          Access All Features
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="ml-4 my-4"
        >
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </ScrollView>
        <View className="mx-4 mb-4 gap-4">
          {plans.map((plan, index) => (
            <PlanItem
              key={index}
              plan={plan}
              isSelected={selectedPlan === index}
              onSelect={() => setSelectedPlan(index)}
            />
          ))}
        </View>
        <Pressable className="mx-4 bg-[#28AF6E] rounded-2xl py-4 items-center">
          <Text className="text-white font-bold">Try Free for 3 Days</Text>
        </Pressable>
        <Text className="mx-4 text-[#FFFFFF85] text-xs text-center mt-4">
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable.
        </Text>
        <Text className="mx-4 text-[#FFFFFF85] text-center text-sm mt-2">
          Terms • Privacy • Restore
        </Text>
      </View>
    </View>
  );
}
