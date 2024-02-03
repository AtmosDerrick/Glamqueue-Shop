import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

const img1 = require("../assets/logo6.jpeg");

const Home = () => {
  const [isPause, setIsPause] = useState(false);
  const users = [
    { id: 1, username: "JohnDoe", queueNumber: 1, serviceBooked: "Haircut" },
    { id: 2, username: "JaneSmith", queueNumber: 2, serviceBooked: "Make-up" },
    {
      id: 3,
      username: "AliceJohnson",
      queueNumber: 3,
      serviceBooked: "Tattooing",
    },
    { id: 4, username: "BobMiller", queueNumber: 4, serviceBooked: "Haircut" },
    {
      id: 5,
      username: "EvaWilliams",
      queueNumber: 5,
      serviceBooked: "Piercing",
    },
    {
      id: 6,
      username: "SamuelBrown",
      queueNumber: 6,
      serviceBooked: "Make-up",
    },
    {
      id: 7,
      username: "OliviaDavis",
      queueNumber: 7,
      serviceBooked: "Haircut",
    },
    {
      id: 8,
      username: "DanielJones",
      queueNumber: 8,
      serviceBooked: "Tattooing",
    },
    {
      id: 9,
      username: "SophiaClark",
      queueNumber: 9,
      serviceBooked: "Piercing",
    },
    {
      id: 10,
      username: "MichaelTaylor",
      queueNumber: 10,
      serviceBooked: "Haircut",
    },
  ];

  const renderUserItem = ({ item }) => (
    <View
      className={
        item.queueNumber != 1
          ? isPause
            ? "py-4 bg-white mb-2 px-4 opacity-10 "
            : "py-4 bg-white mb-2 px-4 "
          : "py-4 bg-orange-100 mb-2 px-4"
      }>
      <View className="flex-row justify-start gap-x-6 items-center">
        <View className="">
          {item.queueNumber != 1 ? (
            <Text className="text-xl font-semibold text-primary">
              {item.queueNumber - 1}
            </Text>
          ) : (
            ""
          )}
        </View>
        <View className="flex-row justify-between w-3/6">
          <View>
            <View className="bg-primary w-20 py-1 rounded-2xl mb-1 ">
              <Text className="text-center text-white text-xs">
                {item.serviceBooked}
              </Text>
            </View>
            <View className="  flex-row justify-start gap-x-4">
              <Text className="text-base font-medium">{item.username}</Text>
            </View>
          </View>
        </View>
      </View>
      {item.queueNumber === 1 ? (
        <View className="flex-row justify-start items-center gap-x-2 ml-4 mt-2">
          <TouchableOpacity className="flex-row justify-between items-center bg-green-500 px-2 py-1 rounded-lg gap-x-2">
            <Ionicons
              name="checkmark-done-circle-sharp"
              size={24}
              color={"white"}
            />
            <Text className="text-white">Done</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row gap-x-1 justify-between items-center border-red-500 border-2 px-2 py-1 rounded-lg ">
            <MaterialCommunityIcons
              name="debug-step-over"
              size={24}
              color={"red"}
            />
            <Text>Elapse</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </View>
  );

  return (
    <View className="">
      <View className=" mb-1 py-1 bg-white flex-row justify-between items-center px-4">
        <View className="  bg-white">
          <Image source={img1} className="h-16 w-16" />
        </View>
        <View>
          <Text className="text-base font-semibold text-primary ">
            Queue: <Text className="text-primary font-semibold text-lg">6</Text>
          </Text>
        </View>
        <View className="">
          {isPause ? (
            <View className="flex-row justify-start items-center gap-2">
              <Text className="text-center text-xs text-gray-600 font-semibold">
                Resume
              </Text>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsPause(!isPause);
                  }}>
                  <Entypo
                    name="controller-jump-to-start"
                    size={24}
                    color={"green"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View className="flex-row justify-start items-center gap-2">
              <Text className="text-center text-xs text-gray-600 font-semibold">
                Break
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsPause(!isPause);
                  }}>
                  <FontAwesome name="pause" size={24} color={"red"} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {
            //     <TouchableOpacity>
            //     <Entypo name="controller-jump-to-start" size={24} color={"green"} />
            //   </TouchableOpacity>
            //   <TouchableOpacity>
            //     <Ionicons name="pause" size={24} color={"red"} />
            //   </TouchableOpacity>
          }
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
