import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Appointments = () => {
  const [search, setSearch] = useState("");
  const [isNewAppointmentActive, setIsNewAppointmentActive] = useState("");
  const [isNewAppointmentActiveViewed, setisNewAppointmentActiveViewed] =
    useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const appointments = [
    {
      username: "JohnDoe",
      service: "Haircut",
      view: true,
      date: "2024-02-01",
      time: "10:00 AM",
      today: true,
    },
    {
      username: "JaneSmith",
      service: "Make-up",
      view: true,
      date: "2024-02-01",
      time: "02:30 PM",
      today: true,
    },
    {
      username: "AliceJohnson",
      service: "Tattooing",
      view: true,
      date: "2024-02-01",
      time: "12:15 PM",
      today: true,
    },
    {
      username: "BobMiller",
      service: "Haircut",
      view: false,
      date: "2024-02-15",
      time: "03:45 PM",
      today: false,
    },
    {
      username: "EvaWilliams",
      service: "Piercing",
      view: true,
      date: "2024-02-20",
      time: "11:30 AM",
      today: false,
    },
    {
      username: "SamuelBrown",
      service: "Make-up",
      view: true,
      date: "2024-02-25",
      time: "01:00 PM",
      today: false,
    },
    {
      username: "OliviaDavis",
      service: "Haircut",
      view: false,
      date: "2024-02-28",
      time: "09:45 AM",
      today: false,
    },
  ];

  const renderAppointmentItemToday = ({ item }) =>
    item.today ? (
      <TouchableOpacity className=" p-2 h-[65px] border-b-[1px] rounded-xl border-gray-200 bg-white mb-2 flex-row items-center gap-x-4">
        <Entypo name="circle" size={18} color={"black"} />

        <View className=" mt-1 w-5/6 ">
          <View className="flex-row justify-between  ">
            <Text className="text-base font-mediumbold">{item.username}</Text>
            <Text className="text-base font-mediumbold">{item.time}</Text>
          </View>
          <Text className="italic">{` ${item.service}`}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      ""
    );

  const renderAppointmentItem = ({ item }) =>
    item.today == true && item.view == true ? (
      <TouchableOpacity
        className=" p-2 h-[75px] border-b-[1px] rounded-xl border-gray-200 bg-white mb-2"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-row justify-between">
          <Text className="text-base font-semibold  text-primary">
            {item.date}
          </Text>
          <Text className="text-base   text-primary">{item.time}</Text>
        </View>
        <View className=" gap-x-8 mt-0">
          <Text className="text-sm font-medium">{item.username}</Text>
          <Text className="italic">{` ${item.service}`}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      ""
    );

  const renderAppointmentItemNotView = ({ item }) =>
    item.today != true && item.view != true ? (
      <TouchableOpacity className=" p-2 h-[75px] border-b-[1px] rounded-xl border-gray-200 bg-white mb-2">
        <View className="flex-row justify-between">
          <Text className="text-base font-semibold  text-primary">
            {item.date}
          </Text>
          <Text className="text-base   text-primary">{item.time}</Text>
        </View>
        <View className=" gap-x-8 mt-0">
          <Text className="text-sm font-medium">{item.username}</Text>
          <Text className="italic">{` ${item.service}`}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      ""
    );

  return (
    <ScrollView className="bg-white h-full">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View className="w-full h-full flex-row items-center px-4 ">
          <View className="w-full h-[300px] shadow-lg flex-row justify-center items-center bg-white rounded-lg ">
            <Text>Hello</Text>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <KeyboardAvoidingView className="mb-6 bg-white ">
        <View className="bg-primary pb-4">
          <View className="px-4 mb-2">
            <View className="border-[1.5px] py-2 px-2 border-white rounded-xl bg-white mt-4 flex-row justify-start gap-x-2">
              <FontAwesome name="search" size={20} color={"#cacaca"} />
              <TextInput
                placeholder="Search"
                value={search}
                onChangeText={(text) => setSearch(text)}
                maxLength={25}
                className="w-3/4"
              />
            </View>
          </View>

          <View className="px-4 my-2 flex-row justify-between gap-x-4 items-center ">
            <View>
              <Text className="text-base font-medium text-white -tracking-tighter">
                Appointments
              </Text>
              <Text className="text-white pt-1 text-xs italic">
                You have the following appointments
              </Text>
            </View>
            <TouchableOpacity className="w-10 rounded-xl h-10 bg-white flex-row justify-center items-center shadow-md">
              <Ionicons name="alarm" size={24} color={"#5d1425"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-4 mb-4">
          <Text className="my-2 text-base text-primary font-semibold">
            Today
          </Text>
          <FlatList
            data={appointments}
            renderItem={renderAppointmentItemToday}
            keyExtractor={(item) => item.username}
          />
        </View>

        {
          <View className="px-6 mb-4 ">
            <TouchableOpacity
              className="flex-row justify-between gap-2 items-center mb-2"
              onPress={() => {
                setIsNewAppointmentActive(!isNewAppointmentActive);
              }}>
              <Text className="py-1 font-semibold text-base text-primary">
                New Appointments
              </Text>
              {isNewAppointmentActive ? (
                <View>
                  <FontAwesome
                    name="chevron-down"
                    size={12}
                    color={"#cacaca"}
                  />
                </View>
              ) : (
                <View>
                  <FontAwesome
                    name="chevron-right"
                    size={12}
                    color={"#cacaca"}
                  />
                </View>
              )}
            </TouchableOpacity>
            {isNewAppointmentActive ? (
              <FlatList
                data={appointments}
                renderItem={renderAppointmentItem}
                keyExtractor={(item) => item.username}
              />
            ) : (
              ""
            )}
          </View>
        }

        <View className="px-6 mb-4">
          <TouchableOpacity
            className="flex-row justify-between gap-2 items-center mb-2"
            onPress={() => {
              setisNewAppointmentActiveViewed(!isNewAppointmentActiveViewed);
            }}>
            <Text className="py-1 font-semibold text-base text-primary">
              Viewed Appointments
            </Text>
            {isNewAppointmentActiveViewed ? (
              <View>
                <FontAwesome name="chevron-down" size={12} color={"#cacaca"} />
              </View>
            ) : (
              <View>
                <FontAwesome name="chevron-right" size={12} color={"#cacaca"} />
              </View>
            )}
          </TouchableOpacity>
          {isNewAppointmentActiveViewed ? (
            <FlatList
              data={appointments}
              renderItem={renderAppointmentItemNotView}
              keyExtractor={(item) => item.username}
            />
          ) : (
            ""
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Appointments;
