import React from "react";
import { Image, ImageSource } from "expo-image";

type IconProps = {
  source: ImageSource;
  size?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ source, size = 24, color }) => {
  return (
    <Image
      source={source}
      style={{ width: size, height: size }}
      tintColor={color}
    />
  );
};

export default Icon;
