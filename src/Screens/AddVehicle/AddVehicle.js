import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function AddVehicle(props) {
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
          <Text style={styles._header_heading}>Add Vehicle</Text>
        </View>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Service Type</Text>
              <Text style={styles._card_title}>Micro</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Brand (Auto Suggestion)</Text>
              <Text style={styles._card_title}>BMW</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Model (Auto suggestion)</Text>
              <Text style={styles._card_title}>ABC</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>
                Manufacturer (Auto suggestion)
              </Text>
              <Text style={styles._card_title}>BMW</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Number plate</Text>
              <Text style={styles._card_title}>YT1234</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Color</Text>
              <Text style={styles._card_title}>Red</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Color</Text>
              <Text style={styles._card_title}>YT1234|</Text>
            </View>
          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            // onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles._continue_btn_txt}>Register</Text>
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
    paddingBottom:10
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
    width: "100%",
  },
  _card_heading: {
    color: "white",
    fontSize: 13,
  },
  _card_title: {
    color: "#9C9C9C",
    fontSize: 15,
    marginTop: 5,
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
});
