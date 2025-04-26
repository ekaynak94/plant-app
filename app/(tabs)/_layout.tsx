import React from "react";
import { Tabs } from "expo-router";
import { Image } from "expo-image";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
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
        tabBarActiveTintColor: "#28AF6E",
        tabBarInactiveTintColor: "#BDBDBD",
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
