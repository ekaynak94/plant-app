import React from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
import Icon from "@/components/Icon";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function SubscriptionModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <View className="relative flex-1 bg-[#101E17]">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={require("@/assets/images/subscription-background.png")}
        style={{ width: "100%", height: "60%" }}
      />
      <Pressable
        onPress={closeModal}
        className="absolute top-safe right-4 bg-black/40 rounded-full items-center justify-center"
      >
        <Icon
          source={require("@/assets/icons/close.svg")}
          size={24}
          color="white"
        />
      </Pressable>
      <View className="absolute bottom-0 w-full h-[60%] pb-safe">
        {/* Content will be added here */}
        <Text className="text-white text-center">Subscription Content</Text>
      </View>
    </View>
  );
}
