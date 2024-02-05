import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const backgroundImage = require("../assets/shop-bg4.png");

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    navigation.navigate("register");
    // Validate input fields before processing the signup
    if (!username || !number || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Process the signup (you can add your logic here)
    // For now, we'll just log the input values
    console.log("Username:", username);
    console.log("Number:", number);
    console.log("Password:", password);

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
      <View>
        <View className="bg-primary h-[400px] flex-row justify-center items-center">
          <Image source={backgroundImage} className="w-44 h-44" />
        </View>
        <View className="w-5/6 mx-auto bg-white h-[400px] px-2 rounded-2xl mt-[-70px]">
          <View className="mb-10">
            <Text className="text-base font-medium mt-4 text-primary text-center">
              Signup
            </Text>
            <Text className="text-xs text-center italic">
              Take your business to the next level with Us
            </Text>
          </View>
          <TextInput
            className={inputStyle}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            className={inputStyle}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TextInput
            className={inputStyle}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          <View className="absolute bottom-2 w-full left-2">
            <View className="flex-row gap-2">
              <Text className="text-center italic">
                I'm already having an Account{" "}
              </Text>
              <TouchableOpacity>
                <Text className="font-semibold text-primary">Signin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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

export default SignupScreen;
