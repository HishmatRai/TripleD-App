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
  Feather,
  AntDesign,
  FontAwesome5,
  Zocial,
  Foundation,
} from "@expo/vector-icons";
export default function DriverMyProfile(props) {
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
          <Text style={styles._header_heading}>My Profile</Text>
        </View>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        {/* =====================> <===================== */}
        <View style={styles._profile_main}>
          <Image
            source={require("./../../img/driverProfile.png")}
            style={styles.profileImg}
          />
          <View style={styles._rating_show_main}>
            <AntDesign name="star" size={20} color="#DDE500" />
            <Text style={styles._rating_show}>4.89</Text>
          </View>
        </View>

        {/* =====================> <===================== */}
        <View style={styles._trips_main}>
          <Text style={styles._user_name}>James Smith</Text>
          <View style={styles._trips_show_main}>
            <View style={styles._trips_counter_show_main}>
              <Text style={styles._counter}>3250</Text>
              <Text style={styles._title}>Total Trips</Text>
            </View>
            <View style={styles._trips_counter_show_main2}>
              <Text style={styles._counter}>2.5</Text>
              <Text style={styles._title}>Years</Text>
            </View>
          </View>
        </View>

        {/* =====================> <===================== */}
        <View style={styles._personal_info_main}>
          <Text style={styles._personal_info_heading}>PERSONAL INFO</Text>
          <FontAwesome5 name="user-edit" size={24} color="white" />
        </View>

        {/* =====================> <===================== */}
        <View style={styles._data_main}>
          <View style={styles._contact_main}>
            <View style={styles._icons_main}>
              <Ionicons name="call" size={24} color="white" />
            </View>
            <Text style={styles._mob_number}>+1 987 654 3210</Text>
          </View>

          <View style={styles._contact_main}>
            <View style={styles._icons_main}>
              <Zocial name="email" size={24} color="white" />
            </View>
            <Text style={styles._mob_number}>James@yelowtaxi.com</Text>
          </View>

          <View style={styles._contact_main}>
            <View style={styles._icons_main}>
              <Foundation name="web" size={24} color="white" />
            </View>
            <Text style={styles._mob_number}>English and Spanish</Text>
          </View>

          <View style={styles._contact_main}>
            <View style={styles._icons_main}>
              <Ionicons name="location" size={24} color="white" />
            </View>
            <Text style={styles._mob_number}>RM6 NL, PO 2452, New York</Text>
          </View>
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
  driverProfile: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: "white",
    borderWidth: 1,
  },
  _profile_main: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  _rating_show_main: {
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  _rating_show: {
    fontSize: 14,
    marginLeft: 5,
  },
  _trips_main: {
    backgroundColor: "#2B386A",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -40,
    position: "relative",
    zIndex: -1,
    borderRadius: 10,
  },
  _user_name: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
  _trips_show_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "white",
    borderTopWidth: 1,
    marginTop: 20,
  },
  _trips_counter_show_main: {
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "white",
    borderRightWidth: 1,
    padding: 10,
  },
  _trips_counter_show_main2: {
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: "white",
    borderLeftWidth: 1,
    padding: 10,
  },
  _counter: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  _title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  _personal_info_main: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  _personal_info_heading: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  _data_main: {
    backgroundColor: "#2B386A",
  },
  _contact_main: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  _mob_number: {
    color: "white",
    fontSize: 16,
  },
  _icons_main: {
    width: "20%",
  },
});
