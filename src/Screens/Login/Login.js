import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login(props) {
  const [remember, setRemember] = useState(true);

  const handler_Login = async () => {
    try {
      var userValue = await AsyncStorage.getItem("user");
      userValue = JSON.parse(userValue);
      console.log("---------->", userValue)
      if (userValue === 0) {
        props.navigation.navigate("UserProfile");
      } else if (userValue === 1) {
        props.navigation.navigate("DriveHome");
      } else if (userValue === 2) {
        props.navigation.navigate("DispatcherPendingRequest");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
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
          <View style={styles._header_main}>
            <TouchableOpacity
              style={styles._header_signin_btn}
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles._header_signin_btn_text}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles._header_sigup_btn}
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={styles._header_signin_btn_text}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

          {/* =====================> <===================== */}
          <View style={styles._email_input_main}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#78849E"
            />
          </View>

          {/* =====================> <===================== */}
          <View style={styles._password_input_main}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#78849E"
              secureTextEntry={true}
            />
          </View>

          {/* =====================> <===================== */}
          <View style={styles._remember_and_forgot_password_main}>
            <View style={styles._remember_main}>
              {remember ? (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={20}
                  color="white"
                  onPress={() => setRemember(!remember)}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-marked"
                  size={20}
                  color="white"
                  onPress={() => setRemember(!remember)}
                />
              )}
              <Text style={styles._remember_text}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles._forgot_password_btn_txt}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
            onPress={() => handler_Login()}
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _header_signin_btn: {
    width: "50%",
    borderBottomColor: "#000066",
    borderBottomWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _header_signin_btn_text: {
    color: "white",
    fontSize: 12,
    paddingBottom: 10,
    letterSpacing: 1,
  },
  _header_sigup_btn: {
    width: "50%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _email_input_main: {
    backgroundColor: "white",
    marginTop: 100,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    color: "#78849E",
    fontSize: 15,
    fontWeight: "bold",
  },
  _password_input_main: {
    backgroundColor: "white",
    marginTop: 30,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  _remember_and_forgot_password_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _remember_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _remember_text: {
    color: "white",
    fontSize: 12,
    paddingLeft: 5,
  },
  _forgot_password_btn_txt: {
    color: "white",
    fontSize: 12,
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
