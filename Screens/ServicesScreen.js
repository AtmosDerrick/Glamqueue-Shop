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
import { SafeAreaView } from "react-native-safe-area-context";
import Dropdown from "react-native-input-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalSelector from "react-native-modal-selector";

const img1 = require("../assets/coverImage.jpeg");
const logo = require("../assets/logo.jpeg");
const ServicesScreen = ({ navigation }) => {
  const [imageCover, setImageCover] = useState(null);
  const [pickLogo, setPickLogo] = useState(null);
  const [services, setServices] = React.useState();

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [showOpeningPicker, setShowOpeningPicker] = useState(false);
  const [showClosingPicker, setShowClosingPicker] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleOpeningTimeChange = (event, selectedTime) => {
    setShowOpeningPicker(Platform.OS === "ios");
    if (selectedTime !== undefined) {
      setOpeningTime(selectedTime);
    }
  };

  //days of operation

  const daysOptions = [
    { key: 0, label: "Monday" },
    { key: 1, label: "Tuesday" },
    { key: 2, label: "Wednesday" },
    { key: 3, label: "Thursday" },
    { key: 4, label: "Friday" },
    { key: 5, label: "Saturday" },
    { key: 6, label: "Sunday" },
  ];

  const handleDaysChange = (item) => {
    setSelectedDays(item);
  };

  const handleClosingTimeChange = (event, selectedTime) => {
    setShowClosingPicker(Platform.OS === "ios");
    if (selectedTime !== undefined) {
      setClosingTime(selectedTime);
    }
  };

  const showOpeningTimePicker = () => {
    setShowOpeningPicker(true);
  };

  const showClosingTimePicker = () => {
    setShowClosingPicker(true);
  };

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
    <View className="bg-white  h-full ">
      <ScrollView className="mb-6">
        <View className="h-[300px]">
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
        </View>
        <View className="mx-4">
          <Dropdown
            label="Services"
            placeholder="Select Serivces..."
            options={[
              { label: "Cornrow", value: "cornrow" },
              { label: "Washing", value: "washing" },
              { label: "Twist", value: "twist" },
              { label: "pedicure", value: "pedicure" },
              { label: "Wig", value: "Wig" },
            ]}
            selectedValue={services}
            onValueChange={(value) => setServices(value)}
            primaryColor={"#5d1425"}
            isMultiple
            isSearchable
            dropdownStyle={{
              borderWidth: 0, // To remove border, set borderWidth to 0
            }}
          />

          <View className="mt-2">
            <Dropdown
              label="Days of Operation"
              placeholder="Select Serivces..."
              options={[
                { label: "Mondays", value: "Mondays" },
                { label: "TuesDay", value: "TuesDay" },
                { label: "WednesDays", value: "WednesDays" },
                { label: "Thursdays", value: "Thursdays" },
                { label: "Fridays", value: "Fridays" },
                { label: "Saturdays", value: "Saturdays" },
                { label: "Sundays", value: "Sundays" },
              ]}
              selectedValue={services}
              onValueChange={(value) => setServices(value)}
              primaryColor={"#5d1425"}
              isMultiple
              dropdownStyle={{
                borderWidth: 0, // To remove border, set borderWidth to 0
              }}
            />
          </View>

          <View>
            <View className="flex-row justify-between  px-2">
              <View>
                <TouchableOpacity onPress={showOpeningTimePicker}>
                  <Text className="text-base font-medium text-gray-700 mb-2">
                    Opening Time
                  </Text>
                </TouchableOpacity>

                <View className="w-26 p-1 border-primary rounded-xl  border-[1px] h-12 flex-row justify-center items-center">
                  {showOpeningPicker && (
                    <DateTimePicker
                      value={openingTime}
                      mode="time"
                      is24Hour={true}
                      display="default"
                      onChange={handleOpeningTimeChange}
                    />
                  )}
                </View>
              </View>

              <View>
                <TouchableOpacity onPress={showClosingTimePicker}>
                  <Text className="text-base font-medium text-gray-700 mb-2">
                    Closing Time
                  </Text>
                </TouchableOpacity>

                <View className="w-26 p-1 border-primary rounded-xl  border-[1px]  h-12 flex-row justify-center items-center">
                  {showClosingPicker && (
                    <DateTimePicker
                      value={closingTime}
                      mode="time"
                      is24Hour={true}
                      display="default"
                      onChange={handleClosingTimeChange}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between mx-4 mt-8">
            <TouchableOpacity
              className="border-primary border-[1px] py-2 px-6 rounded-2xl shadow-md"
              onPress={() => {
                navigation.navigate("home");
              }}>
              <Text className="text-primary font-medium">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-primary py-2 px-6 rounded-2xl shadow-md"
              onPress={() => {
                navigation.navigate("portfolio");
              }}>
              <Text className="text-white font-medium">PortFolio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ServicesScreen;
