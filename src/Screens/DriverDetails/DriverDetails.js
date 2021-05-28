import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
export default function DriverDetails(props) {
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
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <Text style={styles._heading}>Thank You</Text>
          <Text style={styles._sub_heading}>
            Your request has been received and procesed.{"\n"}
            Please see your below confrmation
          </Text>
          <Text style={styles._request_id}>Request ID: QCED 1012354</Text>
          <Text style={styles._page_heading}>Driver Details</Text>

          {/* =====================> <===================== */}
          <View>
              <View>
          <Image
                source={require("./../../img/profileImg.png")}
                style={styles.profileImg}
              />
              <View>
                  <Text>Alexa</Text>
                  <Text>4.5 stars</Text>
              </View>
              </View>
              <View>
                  <TouchableOpacity>
                  <Ionicons name="call-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                  </TouchableOpacity>
              </View>

          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles._continue_btn_txt}>CONTINUE</Text>
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
  _main: {
    padding: 20,
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
  _heading: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
  },
  _sub_heading: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  _request_id: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginTop: 30,
  },
  _page_heading: {
    color: "white",
    fontSize: 22,
    marginTop: 30,
  },
});
