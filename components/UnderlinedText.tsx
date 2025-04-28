import React from "react";
import { View, Text, Platform } from "react-native";
import { Image } from "expo-image";

type UnderlinedTextProps = {
  text: string;
};

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text }) => {
  return (
    <View
      className={`relative translate-y-[${
        Platform.OS === "ios" ? "50%" : "25%"
      }]`}
    >
      <Text className="text-[#13231B] font-bold text-2xl">{text}</Text>
      <Image
        source={require("@/assets/images/underline.png")}
        style={{
          position: "absolute",
          bottom: -16,
          left: 0,
          height: 16,
          width: "100%",
          transform: [{ rotate: "2deg" }],
        }}
        tintColor="#13231B"
      />
    </View>
  );
};

export default UnderlinedText;
