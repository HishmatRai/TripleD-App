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
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SignUp(props) {
  const [activeBtn, setActiveBtn] = useState(0);
  console.log("====>",activeBtn);
  const [selectedValue, setSelectValue] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Guyana", value: "Guyana" },
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "iSkillers", value: "iSkillers" },
    { label: "TechThar", value: "TechThar" },
    { label: "PanaCloud", value: "PanaCloud" },
    { label: "Thari", value: "Thari" },
  ]);
  let HistoryHeading = [
    { heading: "User" },
    { heading: "Driver" },
    { heading: "Dispatcher" },
  ];
  
  const handler_signup = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(activeBtn));
        props.navigation.navigate("Login");
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
          <View style={styles._search_history_main}>
            {HistoryHeading.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles._history_show_main}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 10,
                        marginBottom: 5,
                      }
                      : {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 10,
                        marginBottom: 5,
                      }
                  }
                >
                  <View
                    style={styles._active_icon_main}
                    style={
                      activeBtn === i
                        ? {
                          backgroundColor: "#000066",
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          borderColor: "white",
                          borderWidth: 2,
                        }
                        : {
                          backgroundColor: "white",
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          borderColor: "white",
                          borderWidth: 2,
                        }
                    }
                  ></View>
                  <Text style={styles._history_text}>{v.heading}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* =====================> <===================== */}
          <View style={styles._email_input_main}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#78849E"
            />
          </View>

          {/* =====================> <===================== */}
          <View style={styles._password_input_main}>
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
          <View style={styles._select_country_main}>
            <View style={styles._select_country}>
              <Text style={styles._select_heading}>Country</Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select"
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#fff",
                  width: "100%",
                  alignSelf: "center",
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: "100%",
                  alignSelf: "center",
                }}
                textStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                labelStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                arrowIconStyle={{ color: "#8F92A1" }}
              />
            </View>
            <View style={styles._select_country}>
              <Text style={styles._select_heading}>Company</Text>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                placeholder="Select"
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#fff",
                  width: "100%",
                  alignSelf: "center",
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: "100%",
                  alignSelf: "center",
                }}
                textStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                labelStyle={{
                  fontSize: 16,
                  color: "#8F92A1",
                }}
                arrowIconStyle={{ color: "#8F92A1" }}
              />
            </View>
          </View>

          {/* =====================> <===================== */}
          <TouchableOpacity style={styles._continue_btn} onPress={() => handler_signup()}>
            <Text style={styles._continue_btn_txt}>SIGN UP</Text>
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
    marginBottom: 50,
  },
  _header_signin_btn: {
    width: "50%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
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
    borderBottomColor: "#000066",
    borderBottomWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _email_input_main: {
    backgroundColor: "white",
    marginTop: 50,
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
  _history_text: {
    color: "white",
    paddingLeft: 10,
    fontSize: 18,
  },
  _select_country_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _select_country: {
    width: "40%",
  },
  _select_heading: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
