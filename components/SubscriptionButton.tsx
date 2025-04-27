import React from "react";
import { View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

type SubscriptionButtonProps = {
  className?: string;
};

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  className,
}) => {
  return (
    <Link asChild href={{ pathname: "/subscription" }}>
      <Pressable
        className={`flex-row items-center bg-white p-3 rounded-lg shadow-sm ${className}`}
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
      </Pressable>
    </Link>
  );
};

export default SubscriptionButton;
