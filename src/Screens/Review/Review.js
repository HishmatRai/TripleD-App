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
import { Feather, AntDesign } from "@expo/vector-icons";
import Rating from "./../../Components/Rating/Rating";
export default function Review(props) {
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
        <Feather name="align-center" size={24} color="black" />
        <Text style={styles._headig}>Where To?</Text>
      </View>
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <View style={styles._like}>
            <AntDesign name="like1" size={44} color="white" />
          </View>

          {/* =====================> <===================== */}
          <View style={styles._start_show_main}>
            <Text style={styles._title}>Your Trip has been Completed</Text>
            <Text style={styles._sub_title}>
              Please provide us with your review
            </Text>

            {/* =====================> <===================== */}
            <View style={styles._profile_main}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Alexa
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>XYZ-182</Text>
              <View style={styles.profileImg_main}>
                <Image
                  source={require("./../../img/profileImg.png")}
                  style={styles.profileImg}
                />
                <View style={styles._review_show_main}>
                  <Text style={styles._review_show}>4.5</Text>
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <View style={{ marginTop: 30 }}>
              <View style={styles._rating_show_main}>
                <Text style={styles._rating_heading}>
                  Driver's Driving Behaviour
                </Text>
                <View>
                  <Rating />
                </View>
              </View>
              <View style={styles._rating_show_main}>
                <Text style={styles._rating_heading}>
                  Driver's Professionalism
                </Text>
                <View>
                  <Rating />
                </View>
              </View>
              <View style={styles._rating_show_main}>
                <Text style={styles._rating_heading}>Vehicle Condition</Text>
                <View>
                  <Rating />
                </View>
              </View>
              <View style={styles._rating_show_main}>
                <Text style={styles._rating_heading}>
                  Overall Trip Experience
                </Text>
                <View>
                  <Rating />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <TouchableOpacity
              style={styles._continue_btn}
              onPress={() => props.navigation.goBack()}
            >
              <Text style={styles._continue_btn_txt}>SUBMIT RATING</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles._line}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  _headig: {
    fontSize: 20,
    marginLeft: 10,
  },
  _like: {
    backgroundColor: "#3F4E87",
    width: 96,
    height: 96,
    borderRadius: 96 / 2,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  _start_show_main: {
    backgroundColor: "#3F4E87",
    marginTop: -40,
    position: "relative",
    zIndex: -1,
    borderRadius: 10,
    padding: 20,
  },
  _title: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    marginTop: 30,
  },
  _sub_title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  _profile_main: {
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  _review_show_main: {
    backgroundColor: "#3ACCE1",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    position: "absolute",
    marginTop: 55,
    marginLeft: 55,
  },
  _review_show: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  profileImg_main: {
    marginTop: 20,
  },
  _rating_show_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _rating_heading: {
    color: "white",
  },
  _line: {
    backgroundColor: "#555869",
    height: 3,
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
