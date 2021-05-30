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
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export default function DriversNearByYou(props) {
  let CardData = [
    {
      date: "JAN 10 - 12:30 PM",
      id: "Request ID: ABC 12345",
    },
    {
      date: "JAN 10 - 12:30 PM",
      id: "Request ID: ABC 12345",
    },
    {
      date: "JAN 10 - 12:30 PM",
      id: "Request ID: ABC 12345",
    },
    {
      date: "JAN 10 - 12:30 PM",
      id: "Request ID: ABC 12345",
    },
  ];
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
        <TouchableOpacity>
          <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="filter" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles._request_notification}>
        You have 10 Drivers Near By You
      </Text>

      <ScrollView>
        {/* =====================> <===================== */}
        <View style={styles._main}>
          {/* =====================> <===================== */}
          {CardData.map((v, i) => {
            return (
              <View style={styles._Card_main}>
                <View style={styles.card}>
                  <Text style={styles._page_heading}>Driver Details</Text>

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
                  <TouchableOpacity style={styles._assign_btn}>
                    <Text style={styles._assign_btn_text}>Assign Driver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
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
  _header_main: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  _request_notification: {
    backgroundColor: "#033CDF",
    fontSize: 13,
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  _Card_main: {
    marginBottom: 30,
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
  _page_heading: {
    color: "white",
    fontSize: 22,
    marginTop: 10,
  },
  _users_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  _profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  _rating_show: {
    color: "white",
    fontSize: 14,
  },
  _call_btn_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _Call_btn: {
    backgroundColor: "#353A50",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _message_btn: {
    backgroundColor: "#353A50",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _code: {
    fontSize: 14,
    color: "white",
    borderColor: "#353A50",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  _assign_btn: {
    backgroundColor: "#000066",
    borderRadius: 5,
    width: "40%",
    alignSelf:"center",
    marginTop:20
  },
  _assign_btn_text: {
      color:"white",
      textAlign:"center",
      paddingVertical:5
  },
});
