import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Home from "../Screens/Home";
import ProfileScreen from "../Screens/ProfileScreen";
import ProfileRoute from "./ProfileRoute";
import Appointments from "../Screens/Appointments";

const CustomTitleComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 24,
        justifyContent: "space-between",
        width: "100%",
      }}
      className="w-full">
      <View className="">
        <Text style={{ color: "#fff", fontWeight: "bold", marginRight: 5 }}>
          GlamQueue
        </Text>
      </View>
      <View>
        <View className=" w-full mr-0">
          <TouchableOpacity>
            <FontAwesomeIcon name="bell" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeRoute = ({ navigate }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: "GlamQueue",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#5d1425",
        },
        headerTintColor: "#fff",
        textAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 5,
          backgroundColor: "#5d1425",

          height: 90,
        },
        tabBarShowLabel: false,
        headerShown: true,
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: (props) => <CustomTitleComponent {...props} />,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#5d1425",
          },
          headerTintColor: "#fff",
          textAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <MaterialCommunityIcons
                  name="human-queue"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="appointment"
        component={Appointments}
        options={{
          headerTitle: (props) => <CustomTitleComponent {...props} />,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#5d1425",
          },
          headerTintColor: "#fff",
          textAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabel: () => null,
          tabBarShowLabel: false,
          tabBarBadge: 5,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <Fontisto
                  name="date"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
      {
        // <Tab.Screen
        // name="media"
        // component={Home}
        // options={{
        //   title: "Share your Ideas",
        //   headerTitleAlign: "left",
        //   headerStyle: {
        //     backgroundColor: "green",
        //   },
        //   headerTintColor: "#fff",
        //   textAlign: "left",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        //   tabBarLabel: () => null,
        //   tabBarShowLabel: false,
        //   tabBarBadge: 2,
        //   tabBarIcon: ({ focused }) => (
        //     <View
        //       style={{
        //         top: Platform.OS === "ios" ? 10 : 0,
        //       }}>
        //       <View
        //         style={[
        //           {
        //             padding: 3,
        //             borderRadius: 12,
        //             borderWidth: 2,
        //             borderColor: focused ? "white" : "transparent",
        //           },
        //           focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
        //         ]}>
        //         <MaterialCommunityIcons
        //           name="advertisements"
        //           size={24}
        //           color={focused ? "white" : "#cacaca"}
        //         />
        //       </View>
        //     </View>
        //   ),
        // }}
        // />
      }
      <Tab.Screen
        name="Experts"
        component={ProfileRoute}
        options={{
          title: "GlamQueue",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#5d1425",
          },
          headerTintColor: "#fff",
          textAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabel: () => null,
          tabBarShowLabel: false,
          tabBarBadge: 3,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === "ios" ? 10 : 0,
              }}>
              <View
                style={[
                  {
                    padding: 3,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: focused ? "white" : "transparent",
                  },
                  focused ? {} : { borderWidth: 0 }, // If not focused, remove the border
                ]}>
                <FontAwesome
                  name="user-circle-o"
                  size={24}
                  color={focused ? "white" : "#cacaca"}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoute;
