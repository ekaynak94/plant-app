import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Image } from "expo-image";
import Header from "@/components/Header";

type SubscriptionButtonProps = {
  className?: string;
};

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  className,
}) => {
  return (
    <View
      className={`flex-row items-center bg-white p-3 rounded-lg mt-4 shadow-sm ${className}`}
    >
      <View className="relative">
        <Image
          source={require("@/assets/icons/envelope.svg")}
          style={{ width: 24, height: 24 }}
        />
        <View className="absolute top-[-4px] right-[-4px] bg-red-500 rounded-full w-4 h-4 items-center justify-center">
          <Text className="text-white text-[10px] font-bold">3</Text>
        </View>
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-base font-bold text-text">
          FREE Premium Available
        </Text>
        <Text className="text-sm text-gray-500">
          Tap to upgrade your account!
        </Text>
      </View>
      <Image
        source={require("@/assets/icons/right-arrow.svg")}
        style={{ width: 16, height: 16 }}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View className="flex-1 pt-safe bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header className="px-4" />
      <SubscriptionButton className="mx-4" />
    </View>
  );
}
