import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const backgroundImage = require("../assets/shop-bg4.png");

const RegisterScreen = ({ navigation }) => {
  const [shopName, setShopName] = useState("");
  const [motto, setMotto] = useState("");
  const [contact, setContact] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [shopType, setShopType] = useState("");

  const handleSubmit = () => {
    // Validate input fields before processing the registration

    navigation.navigate("services");

    if (
      !shopName ||
      !motto ||
      !contact ||
      !region ||
      !city ||
      !ownerName ||
      !shopType
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Process the registration (you can add your logic here)
    // For now, we'll just log the input values
    console.log("Shop Name:", shopName);
    console.log("Motto:", motto);
    console.log("Contact:", contact);
    console.log("Location:", `${region}, ${city}`);
    console.log("Owner Name:", ownerName);
    console.log("Shop Type:", shopType);

    // Optionally, you can navigate to the next screen or perform other actions
  };

  const inputStyle =
    "h-10 px-2 rounded-lg border-b-[#5d1425] text-primary border-b-[1px] mb-3";

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}>
      <View style={styles.header}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
      </View>
      <View className="w-5/6 mx-auto bg-white px-2 mt-[-50px] rounded-2xl py-2 h-[500px]">
        <View className="mb-4">
          <Text className="text-lg font-semibold text-primary text-center ">
            Register Your Business
          </Text>
          <Text className="text-center text-xs italic">
            Increase Customer Satisfaction with GlameQueue
          </Text>
        </View>
        <TextInput
          className={inputStyle}
          placeholder="Shop Name"
          value={shopName}
          onChangeText={(text) => setShopName(text)}
        />
        <TextInput
          className={inputStyle}
          placeholder="Motto"
          value={motto}
          onChangeText={(text) => setMotto(text)}
        />
        <TextInput
          className={inputStyle}
          placeholder="Contact"
          value={contact}
          onChangeText={(text) => setContact(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          className={inputStyle}
          placeholder="Region"
          value={region}
          onChangeText={(text) => setRegion(text)}
        />
        <TextInput
          className={inputStyle}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          className={inputStyle}
          placeholder="Owner Name"
          value={ownerName}
          onChangeText={(text) => setOwnerName(text)}
        />
        <TextInput
          className={inputStyle}
          placeholder="Shop Type"
          value={shopType}
          onChangeText={(text) => setShopType(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    height: 250,
    marginBottom: 6,
    backgroundColor: "#5d1425",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: 120,
    height: 120,
  },
  content: {
    flex: 1,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5d1425",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default RegisterScreen;
