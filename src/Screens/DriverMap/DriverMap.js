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
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import Map from "./../../Components/Map/Map";
export default function DriverMap(props) {
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
        <View style={styles._line}></View>
  
      {/* =====================> <===================== */}
      <View style={styles._Card_main}>
                                <View style={styles._request_main}>
                                    <Text style={styles._request_id_show}>JAN 10 - 12:30 PM</Text>
                                </View>
                                <View style={styles.card}>
                                    <View style={styles._Card_header_mian}>
                                        <View style={styles._Card_header_profile_main}>
                                            <Image
                                                source={require("./../../img/profileImg.png")}
                                                style={styles.profileImg}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={styles._user_name}>Neil Gondalez</Text>
                                                <View style={styles._location_main}>
                                                    <Ionicons name="location" size={20} color="white" />
                                                    <Text style={styles._location_show}>996 Daine Street</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles._Card_header_km_main}>
                                            <View style={styles._call_message_main}>
                                                <TouchableOpacity>
                                                    <Ionicons name="call" size={24} color="white" />
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <MaterialIcons name="message" size={24} color="white" />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles._km_show_main}>
                                                <Text style={styles._km}>1.1 km</Text>
                                                <TouchableOpacity>
                                                    <FontAwesome name="send" size={20} color="white" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles._Card_body_main}>
                                        <View style={styles.card_dots_main}>
                                            <Text style={styles._big_dot}></Text>
                                            <Text style={styles._small_dot}></Text>
                                            <Text style={styles._small_dot}></Text>
                                            <Text style={styles._small_dot}></Text>
                                            <Text style={styles._small_dot}></Text>
                                            <Text style={styles._small_dot}></Text>
                                            <Text style={styles._big_dot}></Text>
                                        </View>
                                        <View style={styles.card_data_main}>
                                            <View style={styles._ignore_portion_main}>
                                                <View>
                                                    <Text style={{ color: "white", fontSize: 13 }}>Pickup Location</Text>
                                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Fresh Market</Text>
                                                </View>
                                            </View>
                                            <View style={styles._accept_portion_main}>
                                                <View>
                                                    <Text style={{ color: "white", fontSize: 13 }}>Destination Location</Text>
                                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>My Home</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            // onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles._continue_btn_txt}>Start</Text>
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
    backgroundColor: "#217B01",
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
  _Card_main: {
    marginTop: 30
},
_request_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
},
_request_id_show: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
},
card: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    elevation: 5,
    backgroundColor: "#3F4E87",
},
_Card_header_mian: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
},
_Card_header_profile_main: {
    width: "80%",
    flexDirection: "row",
},
_Card_header_km_main: {
    width: "20%",
},
profileImg: {
    width: 56,
    height: 56,
    borderRadius: 10
},
_user_name: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 15
},
_location_main: {
    flexDirection: "row",
    alignItems: "center"
},
_location_show: {
    color: "white",
    fontSize: 10,
},
_call_message_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
},
_km_show_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
},
_km: {
    color: "white",
    fontSize: 11
},
_Card_body_main: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
},
card_dots_main: {
    alignItems: "center",
    justifyContent: "center",
    width: "10%"
},
card_data_main: {
    width: "90%"
},
_big_dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "white",
    marginVertical: 10
},
_small_dot: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: "white",
    marginVertical: 3
},
_ignore_portion_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 20,
    marginBottom: 10
},
_accept_portion_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop:10
},
});
