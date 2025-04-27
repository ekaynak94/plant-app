import React from "react";
import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import Icon from "@/components/Icon";
import LinearGradientText from "@/components/LinearGradientText";

type SubscriptionButtonProps = {
  className?: string;
};

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  className,
}) => {
  return (
    <Link asChild href={{ pathname: "/subscription" }}>
      <Pressable
        className={`flex-row items-center bg-[#24201A] p-3 rounded-lg shadow-sm ${className}`}
      >
        <View className="relative">
          <Icon source={require("@/assets/icons/envelope.svg")} size={32} />
          <View className="absolute top-[-4px] right-[-4px] bg-[#E82C13E5] rounded-full w-4 h-4 items-center justify-center">
            <Text className="text-white text-[10px] font-bold">3</Text>
          </View>
        </View>
        <View className="flex-1 ml-3">
          <LinearGradientText
            className="font-bold"
            startColor="#F0D399"
            endColor="#E4B046"
          >
            FREE Premium Available
          </LinearGradientText>
          <LinearGradientText
            className="text-sm"
            startColor="#F0D399"
            endColor="#E4B046"
          >
            Tap to upgrade your account!
          </LinearGradientText>
        </View>
        <Icon source={require("@/assets/icons/right-arrow.svg")} size={16} />
      </Pressable>
    </Link>
  );
};

export default SubscriptionButton;
