import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function DispatcherMyVehicle(props) {
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
          <Text style={styles._header_heading}>My Vehicle</Text>
        </View>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Toyota Prius</Text>
              <Text style={styles._card_title}>AB 1234</Text>
            </View>
            <View style={styles._card_icons_portion}>
              <Image
                source={require("./../../img/car2.png")}
                style={styles.carImg}
              />
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Toyota Prius</Text>
              <Text style={styles._card_title}>AB 1234</Text>
            </View>
            <View style={styles._card_icons_portion}>
              <Image
                source={require("./../../img/car2.png")}
                style={styles.carImg}
              />
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Toyota Prius</Text>
              <Text style={styles._card_title}>AB 1234</Text>
            </View>
            <View style={styles._card_icons_portion}>
              <Image
                source={require("./../../img/car2.png")}
                style={styles.carImg}
              />
            </View>
          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles._continue_btn_txt}>Assign Vehicle</Text>
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
    borderBottomColor: "white",
    borderBottomWidth: 1,
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
    color: "#B4B4B4",
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
    width: 46,
    height: 46,
  },
});
