import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const img1 = require("../assets/logo6.jpeg");

const ProfileScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <View className="w-full h-1/3 bg-primary flex-row justify-center items-center">
        <View className="w-28 h-28">
          <Image source={img1} className="h-24 w-24 rounded-full shadow-md" />
          <TouchableOpacity className="absolute  bottom-3 right-3 rounded-full bg-white w-8 h-8 items-center justify-center border-2 border-primary ">
            <AntDesign name="edit" size={20} color={"black"} />
          </TouchableOpacity>
          <Text className="text-center mt-4 font-semibold text-base text-white">
            EYELASH
          </Text>
        </View>
      </View>

      <View className="w-3/4 h-2/3 mx-auto bg-white mt-[-10px] rounded-xl px-3 pt-6 shadow-md">
        {isOpen ? (
          <TouchableOpacity
            className="flex-row justify-between mb-8"
            onPress={() => {
              setIsOpen(!isOpen);
            }}>
            <View className="flex-row justify-start gap-x-4 items-center ">
              <FontAwesome6 name="door-closed" size={24} color={"red"} />
              <Text className="font-medium text-red-500">Close</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="flex-row justify-between mb-8"
            onPress={() => {
              setIsOpen(!isOpen);
            }}>
            <View className="flex-row justify-start gap-x-4 items-center ">
              <MaterialCommunityIcons
                name="door-open"
                size={24}
                color={"green"}
              />
              <Text className="font-medium text-green-500">Open</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className="flex-row justify-between mb-8"
          onPress={() => {
            navigation.navigate("edit");
          }}>
          <View className="flex-row justify-start gap-x-4 items-center ">
            <AntDesign name="edit" size={24} color={"gray"} />
            <Text className="font-medium text-gray-600">Edit Profile</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"gray"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between mb-8">
          <View className="flex-row justify-start gap-x-4 items-center ">
            <MaterialCommunityIcons
              name="account-cash-outline"
              size={24}
              color={"gray"}
            />
            <Text className="font-medium text-gray-600">Serivce Details</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"gray"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between mb-8">
          <View className="flex-row justify-start gap-x-4 items-center ">
            <FontAwesome6 name="list" size={24} color={"gray"} />
            <Text className="font-medium text-gray-600">PortFolio</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"gray"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between mb-8">
          <View className="flex-row justify-start gap-x-4 items-center ">
            <MaterialCommunityIcons name="history" size={24} color={"gray"} />
            <Text className="font-medium text-gray-600">History</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"gray"} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between mb-8">
          <View className="flex-row justify-start gap-x-4 items-center ">
            <Ionicons name="settings" size={24} color={"gray"} />
            <Text className="font-medium text-gray-600">settings</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"gray"} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between mb-8">
          <View className="flex-row justify-start gap-x-4 items-center ">
            <MaterialCommunityIcons name="logout" size={24} color={"red"} />
            <Text className="font-medium text-red-500">Logout</Text>
          </View>
          <FontAwesome6 name="arrow-right" size={20} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
