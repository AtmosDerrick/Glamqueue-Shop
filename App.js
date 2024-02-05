import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeRoute from "./Routes/HomeRoute";
import { NavigationContainer } from "@react-navigation/native";

import StartRoute from "./Routes/StartRoute";

export default function App() {
  return (
    <NavigationContainer>
      <StartRoute />
    </NavigationContainer>
  );
}
