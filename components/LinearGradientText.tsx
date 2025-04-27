import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type LinearGradientTextProps = {
  children: string;
  startColor: string;
  endColor: string;
  className?: string;
};

const LinearGradientText: React.FC<LinearGradientTextProps> = ({
  children,
  startColor,
  endColor,
  className,
}) => {
  return (
    <MaskedView
      style={{ flex: 1 }}
      maskElement={<Text className={className}>{children}</Text>}
    >
      <LinearGradient colors={[startColor, endColor]} style={[{ flex: 1 }]} />
    </MaskedView>
  );
};

export default LinearGradientText;
