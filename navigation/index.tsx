/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./TopTabsNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";

import Router from "../constants/Routes";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons
                name="search"
                size={24}
                color={Colors.light.background}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color={Colors.light.background}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name={Router.ChatRoom}
        component={ChatRoomScreen}
        options={({ route, navigation }) => ({
          title: null,
          headerRight: headerRightFn,
          headerLeft: () => headerLeftFn(route.params.user, navigation),
        })}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

function headerRightFn() {
  return (
    <View style={styles.chatScreenHeaderRight}>
      <FontAwesome5 name="video" size={24} color={Colors.light.background} />
      <MaterialIcons name="call" size={24} color={Colors.light.background} />
      <MaterialCommunityIcons
        name="dots-vertical"
        size={24}
        color={Colors.light.background}
      />
    </View>
  );
}

function headerLeftFn(user, navigation) {
  return (
    <View style={styles.chatScreenHeaderLeft}>
      <HeaderBackButton
        onPress={() => navigation.goBack()}
        backImage={() => (
          <View style={styles.backWrapper}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={Colors.light.background}
              size={24}
            />
            <Image source={{ uri: user.imageUri }} style={styles.image} />
          </View>
        )}
        labelVisible={false}
      />

      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.friendsNames}>Baker, Ahmed, Ashraf...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    marginRight: 10,
  },
  chatScreenHeaderRight: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginRight: 10,
    paddingBottom: 15,
    paddingTop: 4,
  },
  chatScreenHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    paddingBottom: 10,
    paddingTop: 4,
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginRight: 10,
    marginLeft: 4,
  },
  backWrapper: {
    flexDirection: "row",
    borderRadius: 16,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  friendsNames: {
    fontSize: 12,
    color: "#fff",
  },
});
