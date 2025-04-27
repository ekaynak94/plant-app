import React from "react";
import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import Icon from "@/components/Icon";

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
          <Icon source={require("@/assets/icons/envelope.svg")} size={24} />
          <View className="absolute top-[-4px] right-[-4px] bg-[#E82C13E5] rounded-full w-4 h-4 items-center justify-center">
            <Text className="text-white text-[10px] font-bold">3</Text>
          </View>
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-base font-bold text-[#13231B]">
            FREE Premium Available
          </Text>
          <Text className="text-sm text-[#BDBDBD]">
            Tap to upgrade your account!
          </Text>
        </View>
        <Icon source={require("@/assets/icons/right-arrow.svg")} size={16} />
      </Pressable>
    </Link>
  );
};

export default SubscriptionButton;
