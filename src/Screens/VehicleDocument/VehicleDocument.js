import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
export default function VehicleDocument(props) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      {/* =====================> <===================== */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#3F4E87"
        translucent={true}
      />

      {/* =====================> <===================== */}
      <View style={styles._header_main}>
        <View style={styles._header_back_main}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles._header_heading}>Vehicle Document</Text>
        </View>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Photo of Vehicle</Text>
              <Text style={styles._card_title}>Upload Photo</Text>
            </View>
            <View style={styles._card_icons_portion}>
              <TouchableOpacity>
                <Feather name="share" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._images_main}>
            <Image
              source={require("./../../img/car.png")}
              style={styles.carImg}
            />
            <Image
              source={require("./../../img/car.png")}
              style={styles.carImg}
            />
            <TouchableOpacity onPress={() => pickImage()}>
              <Ionicons name="add-circle-sharp" size={44} color="white" />
            </TouchableOpacity>
          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            onPress={() => props.navigation.navigate("BankDetails")}
          >
            <Text style={styles._continue_btn_txt}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F4E87",
  },
  _header_main: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _header_back_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_heading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  _main: {
    margin: 20,
  },
  _card_main: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _card_text_portion: {
    width: "80%",
  },
  _card_icons_portion: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _card_heading: {
    color: "white",
    fontSize: 16,
  },
  _card_title: {
    color: "white",
    fontSize: 15,
    marginTop: 5,
  },
  _scaner_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _continue_btn: {
    backgroundColor: "#000066",
    borderRadius: 5,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  _continue_btn_txt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingVertical: 15,
  },
  carImg: {
    width: 88,
    height: 88,
    borderRadius: 10,
    marginRight: 10,
  },
  _images_main: {
    flexDirection: "row",
    alignItems: "center",
  },
});
