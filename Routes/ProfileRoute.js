import React from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../Screens/ProfileScreen";
import ProfileShop from "../Screens/ProfileShop";

const Stack = createStackNavigator();

const ProfileRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "white",
          backgroundColor: "#5d1425",
        },
      }}>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="edit"
        component={ProfileShop}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5d1425",
            borderColor: "#5d1425",
          },
          headerTitle: "Profile",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileRoute;
