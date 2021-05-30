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
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import Map from "./../../Components/Map/Map";
export default function UserMap(props) {
  return (
    <View style={styles.container}>
      {/* =====================> <===================== */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#3F4E87"
        translucent={true}
      />
      <View style={styles._map_main}>
        <Map />
      </View>
      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          <Text style={styles._page_heading}>4 min away</Text>

          {/* =====================> <===================== */}
          <View style={styles._users_main}>
            <View style={styles._profile_main}>
              <Image
                source={require("./../../img/profileImg.png")}
                style={styles.profileImg}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles._user_name}>Alexa</Text>
                <Text style={styles._rating_show}>4.5 stars</Text>
              </View>
            </View>
            <View style={styles._call_btn_main}>
              <TouchableOpacity style={styles._Call_btn}>
                <Ionicons name="call-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles._message_btn}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* =====================> <===================== */}
          <View style={styles._users_main}>
            <View style={styles._profile_main}>
              <Image
                source={require("./../../img/profileImg.png")}
                style={styles.profileImg}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles._user_name}>Audi S7</Text>
                <Text style={styles._rating_show}>Brown</Text>
              </View>
            </View>
            <Text style={styles._code}>H32KHS</Text>
          </View>
          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            // onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles._continue_btn_txt}>CANCEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._line}></View>
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
  _map_main: {
    width: "100%",
    height: "50%",
  },
  _page_heading: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
  },
  _users_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 10
  },
  _profile_main: {
    flexDirection: "row",
    alignItems: "center"
  },
  _user_name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  _rating_show: {
    color: "white",
    fontSize: 14
  },
  _call_btn_main: {
    flexDirection: "row",
    alignItems: "center"
  },
  _Call_btn: {
    backgroundColor: "#353A50",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  _message_btn: {
    backgroundColor: "#353A50",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  _code: {
    fontSize: 14,
    color: "white",
    borderColor: "#353A50",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10
  },
  _line: {
    backgroundColor: "#555869",
    height: 3,
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
