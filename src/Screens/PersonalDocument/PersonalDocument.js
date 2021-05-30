import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import Rating from "./../../Components/Rating/Rating";
export default function PersonalDocument(props) {
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
          <Text style={styles._header_heading}>Personal Document</Text>
        </View>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <Text style={styles._card_heading}>Photo</Text>
              <Text style={styles._card_title}>Vehicle Registration</Text>
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
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <View style={styles._scaner_main}>
                <Text style={styles._card_heading}>
                  Defencive Driving Certificate
                </Text>
                <Ionicons
                  name="scan"
                  size={24}
                  color="white"
                  style={{ marginLeft: 10 }}
                />
              </View>
              <Text style={styles._card_title}>Driving Certificate</Text>
            </View>
            <View style={styles._card_icons_portion}>
              <TouchableOpacity>
                <MaterialIcons name="attach-file" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ios-download" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <View style={styles._card_text_portion}>
              <View style={styles._scaner_main}>
                <Text style={styles._card_heading}>Other Certificate</Text>
                <Ionicons
                  name="scan"
                  size={24}
                  color="white"
                  style={{ marginLeft: 10 }}
                />
              </View>
              <Text style={styles._card_title}>
                A passport is a travel document...
              </Text>
            </View>
            <View style={styles._card_icons_portion}>
              <TouchableOpacity>
                <MaterialIcons name="attach-file" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ios-download" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._card_main}>
            <Text style={styles._card_heading}>Ratings</Text>
            <View>
              <Rating />
            </View>
          </View>

          {/* =====================> <===================== */}
          <Text
            style={{
              color: "white",
              fontSize: 15,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            By continuing, I confirm that i have read & agree to the Terms &
            conditions and Privacy policy
          </Text>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            onPress={() => props.navigation.navigate("Profile")}
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
});
