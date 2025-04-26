import React from "react";
import { Tabs, Link } from "expo-router";
import { Image } from "expo-image";
import colors from "@/constants/colors";

const ScanButton = () => (
  <Link
    href="/"
    className="flex items-center justify-center w-[64px] h-[64px] bg-primary border-[4px] border-emerald-400 rounded-full mt-[-32px] p-[16px]"
  >
    <Image
      style={{ width: "100%", height: "100%" }}
      tintColor={"white"}
      source={require("@/assets/icons/scan.svg")}
    />
  </Link>
);

const TabBarIcon: React.FC<{
  name: "home" | "diagnose" | "myGarden" | "profile";
  color: string;
}> = ({ name, color }): React.ReactNode => {
  switch (name) {
    case "diagnose":
      return (
        <Image
          style={{ width: 25, height: 25 }}
          tintColor={color}
          source={require("@/assets/icons/diagnose.svg")}
        />
      );
    case "myGarden":
      return (
        <Image
          style={{ width: 25, height: 25 }}
          tintColor={color}
          source={require("@/assets/icons/myGarden.svg")}
        />
      );
    case "profile":
      return (
        <Image
          style={{ width: 25, height: 25 }}
          tintColor={color}
          source={require("@/assets/icons/profile.svg")}
        />
      );
    default:
      return (
        <Image
          style={{ width: 25, height: 25 }}
          tintColor={color}
          source={require("@/assets/icons/home.svg")}
        />
      );
  }
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          href: "/",
          title: "Diagnose",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="diagnose" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarButton: ScanButton,
        }}
      />
      <Tabs.Screen
        name="my-garden"
        options={{
          href: "/",
          title: "My Garden",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="myGarden" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: "/",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="profile" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
