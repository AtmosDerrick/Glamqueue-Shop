import React from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../Screens/RegisterScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import HomeRoute from "./HomeRoute";
import ServicesScreen from "../Screens/ServicesScreen";
import PortFolioScreen from "../Screens/PortFolioScreen";

const Stack = createStackNavigator();

const StartRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "white",
          backgroundColor: "#5d1425",
        },
      }}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="services"
        component={ServicesScreen}
        options={{
          headerShown: true,
          headerTitle: "Services Details",
          headerStyle: {
            backgroundColor: "#5d1425",
          },
          headerTintColor: "#fff",
          textAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "12",
          },
        }}
      />

      <Stack.Screen
        name="home"
        component={HomeRoute}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="portfolio"
        component={PortFolioScreen}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          headerTitle: "PortFolio",
          headerStyle: {
            backgroundColor: "#5d1425",
          },
          headerTintColor: "#fff",
          textAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "12",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StartRoute;
