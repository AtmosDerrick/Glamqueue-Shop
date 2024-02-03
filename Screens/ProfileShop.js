import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Platform,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

const img1 = require("../assets/coverImage.jpeg");
const logo = require("../assets/logo.jpeg");
const ProfileShop = () => {
  const [imageCover, setImageCover] = useState(null);
  const [pickLogo, setPickLogo] = useState(null);

  const pickCoverImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageCover(result.assets[0].uri);
    }
  };

  const pickLogoImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPickLogo(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View className="h-[250px]">
        <View className="bg-white h-[200px]">
          {imageCover == null ? (
            <View>
              <TouchableOpacity onPress={pickCoverImage}>
                <Image source={img1} className="h-[200px] " />
              </TouchableOpacity>
              <View className="absolute w-full top-20">
                <Text className=" text-center font-medium">
                  Upload Cover Image
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: imageCover }} className="h-[200px] " />
            </TouchableOpacity>
          )}
        </View>
        <View className="w-28 h-20  ml-8">
          <View className="w-24 h-24 border-4 border-white bg-gray-600 rounded-full mt-[-40px] flex-row justify-center items-center">
            {pickLogo == null ? (
              <Image
                source={logo}
                className="h-24 w-24 rounded-full border-4 border-white"
              />
            ) : (
              <Image
                source={{ uri: pickLogo }}
                className="h-24 w-24 rounded-full border-4 border-white"
              />
            )}
          </View>
          <TouchableOpacity
            className="absolute  bottom-7 right-3 rounded-full bg-white w-8 h-8 items-center justify-center border-2 border-white "
            onPress={pickLogoImage}>
            <AntDesign name="edit" size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="absolute right-8 bottom-0">
          <TouchableOpacity className="bg-primary py-2 px-6 rounded-2xl shadow-sm">
            <Text className="font-medium text-white">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-8 mt-8">
        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Shop Name:
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">
            EyeLash Spa
          </Text>
        </View>
        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Motto:
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">
            Glow With Us
          </Text>
        </View>

        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Contact:
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">
            059 413 2077
          </Text>
        </View>

        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Location:
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">
            New Aplaku, Weija - Accra
          </Text>
        </View>

        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Shop Type
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">Saloon</Text>
        </View>

        <View className="border-b-[1px] pb-1 border-gray-400 flex-row justify-start items-center gap-x-4 mb-6">
          <Text className="text-xs font-medium text-gray-400 w-1/4 ">
            Owner
          </Text>
          <Text className="text-sm font-medium text-gray-600 ">Mr. Isaac</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProfileShop;
