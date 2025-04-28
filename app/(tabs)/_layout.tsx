import React from "react";
import { Tabs, Link } from "expo-router";
import Icon from "@/components/Icon";

const ScanButton = () => (
  <Link
    href="/"
    className="flex items-center justify-center w-[64px] h-[64px] bg-[#28AF6E] border-[4px] border-[#2CCC80] rounded-full mt-[-32px] p-[16px]"
  >
    <Icon source={require("@/assets/icons/scan.svg")} size={32} color="white" />
  </Link>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#28AF6E",
        tabBarInactiveTintColor: "#BDBDBD",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              source={require("@/assets/icons/home.svg")}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          href: "/",
          title: "Diagnose",
          tabBarIcon: ({ color }) => (
            <Icon
              source={require("@/assets/icons/diagnose.svg")}
              size={25}
              color={color}
            />
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
            <Icon
              source={require("@/assets/icons/my-garden.svg")}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: "/",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon
              source={require("@/assets/icons/profile.svg")}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
