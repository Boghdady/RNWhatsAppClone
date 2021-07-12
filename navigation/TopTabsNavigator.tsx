import { Fontisto, Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

import NotFoundScreen from "../screens/NotFoundScreen";

import { TopTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import Router from "../constants/Routes";

const TopTabs = createMaterialTopTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTabs.Navigator
      initialRouteName={Router.Camera}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },

        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <TopTabs.Screen
        name={Router.Camera}
        component={NotFoundScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
      />

      <TopTabs.Screen
        name={Router.Chats}
        component={ChatsScreen}
        options={{
          title: "CHATS",
        }}
      />

      <TopTabs.Screen
        name={Router.Status}
        component={TabTwoNavigator}
        options={{
          title: "STATUS",
        }}
      />
      <TopTabs.Screen
        name={Router.Calls}
        component={TabTwoNavigator}
        options={{
          title: "CALLS",
        }}
      />
    </TopTabs.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatsScreen}
        options={{ header: () => null }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
