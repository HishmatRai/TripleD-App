import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function DriverThankyou(props) {
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
      <View style={styles._main}>
        <Text style={styles._hedeing}>Thankyou</Text>
        <Text style={styles._des}>
          Thank you for registering with YelowTaxi. Please complete your
          registration and be activated by visiting our office.
        </Text>
        <TouchableOpacity style={styles._ok_btn} onPress={() => props.navigation.navigate("DriveHome")}>
            <Text style={styles._ok_btn_text}>OKAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F4E87",
  },
  _main: {
    backgroundColor: "#001977",
    width: "80%",
    alignSelf: "center",
    marginTop: "70%",
    padding:20,
    borderRadius:10
  },
  _hedeing:{
      color:"white",
      fontSize:23,
      fontWeight:"bold"
  },
  _des:{
      color:"white",
      fontSize:14,
      marginTop:10
  },
  _ok_btn:{
      justifyContent:"flex-end",
      alignSelf:"flex-end",
      marginTop:10
  },
  _ok_btn_text:{
      color:"#3DB24B",
      fontSize:16,
      fontWeight:"bold"
  }
});
