import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PortFolioScreen = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const pickMultipleImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        aspect: [3, 4],
        quality: 1,
      });

      if (!result.canceled) {
        // Update the file state variable with the selected images
        let file = result.assets.map((asset) => asset.uri);
        const limitedImages = file.slice(0, 10);
        setSelectedImages(limitedImages);

        // Clear any previous errors

        // Call a function to handle the upload and set selectedImages after upload
      } else {
        // Handle cancellation or other cases
        console.log("Image picker cancelled or failed");
      }
    } catch (error) {
      console.error("Error picking images: ", error);
      setError("Error picking images");
    }
  };

  // Function to arrange images in rows
  const arrangeImagesInRows = (images, imagesPerRow) => {
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      const row = images.slice(i, i + imagesPerRow);
      rows.push(row);
    }
    return rows;
  };

  return (
    <View className="h-full">
      <View className="my-2 mx-4">
        <Text className="text-center text-lg font-semibold text-primary">
          Gallary
        </Text>
        <Text className="text-center font-normal italic text-primary text-sm">
          Impress your Customer with your work
        </Text>
      </View>
      <View style={styles.imagesContainer} className="mt-4 mx-4">
        {selectedImages && selectedImages.length > 1 ? (
          arrangeImagesInRows(selectedImages, 3).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {row.map((imageUri, index) => (
                <View style={styles.image}>
                  <Image
                    key={index}
                    source={{ uri: imageUri }}
                    style={styles.image}
                  />
                  <View className="absolute right-0 top-1">
                    <TouchableOpacity className="w-6 h-6 flex-row justify-center items-center shadow-lg bg-white rounded-full">
                      <FontAwesome name="trash" color={"red"} size={18} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))
        ) : (
          <View className="flex-row justify-center items-center h-3/4">
            <View style={{ width: 100, height: 100 }}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/c1/0a/af/c10aaf1d651e144a88ef16475917c3b0.gif",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          </View>
        )}
      </View>
      <View className="absolute bottom-7  w-full px-4   ">
        <TouchableOpacity onPress={pickMultipleImages}>
          <View className="bg-primary h-12 rounded-xl flex-row justify-center items-center">
            <Text className="text-center text-base font-semibold text-white">
              + Upload Image
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  imagesContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  addButton: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  addButtonIcon: {
    width: 100,
    height: 100,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  noteText: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
});

export default PortFolioScreen;
