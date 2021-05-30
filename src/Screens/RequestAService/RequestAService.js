import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePciker from "./../../Components/DatePciker/DatePicker";
import TimePicker from "./../../Components/TimePicker/TimePciker";
import * as Location from "expo-location";
export default function RequestAService(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Raptor", value: "Raptor" },
    { label: "Toyota", value: "Toyota" },
    { label: "McLaren", value: "McLaren" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState("Taxi");
  const [items2, setItems2] = useState([
    { label: "Taxi", value: "Taxi" },
    { label: "Rent a Vehicle", value: "Rent a Vehicle" },
    { label: "Request a Driver", value: "Request a Driver" },
    { label: "Haulage", value: "Haulage" },
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: "PM", value: "PM" },
    { label: "AM", value: "AM" },
  ]);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const locationPermission = () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  };

  console.log(value2)
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
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles._header_profile_main}>
          <TouchableOpacity onPress={() => props.navigation.navigate("UserProfile")}>
            <Image
              source={require("./../../img/headerProfile.png")}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Review")}>
            <Ionicons name="ios-notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* =====================> <===================== */}
      <ScrollView>
        <View style={styles._main}>
          {/* =====================> <===================== */}
          <Text style={styles._title_heading}>Type of Services</Text>
          <DropDownPicker
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            placeholder="Taxi"
            zIndex={1000}
            zIndexInverse={1000}
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#fff",
              width: "100%",
              borderRadius: 5,
            }}
            containerStyle={{
              width: "50%",
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

          {/* =====================> <===================== */}
          {
              value2 === "Taxi"?
        
          <View style={styles._taxi_view_main}>
            <Text style={styles._title_heading}>Type of Vehicle</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Sedan"
              zIndex={-1000}
              zIndexInverse={-1000}
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#fff",
                width: "100%",
                borderRadius: 5,
              }}
              containerStyle={{
                width: "50%",
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

            {/* =====================> <===================== */}
            <View style={styles._date_time_pciker_main}>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Time</Text>
                <View style={styles._date_main}>
                  <View style={styles._time_show}>
                    <TimePicker />
                  </View>
                  <View style={styles._time_show2}>
                    <DropDownPicker
                      open={open3}
                      value={value3}
                      items={items3}
                      setOpen={setOpen3}
                      setValue={setValue3}
                      setItems={setItems3}
                      placeholder="PM"
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: "#fff",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      textStyle={{
                        fontSize: 16,
                        color: "#8F92A1",
                      }}
                      labelStyle={{
                        fontSize: 12,
                        color: "#8F92A1",
                      }}
                      arrowIconStyle={{ color: "#8F92A1" }}
                    />
                  </View>
                  <Entypo name="stopwatch" size={24} color="white" />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Pick Up Location</Text>
            <TouchableOpacity
              style={styles._location_btn}
              onPress={() => locationPermission()}
            >
              <Ionicons name="location" size={24} color="black" />
              <Text style={styles._location_btn_text}>
                Mermaid beach road, Luciana
              </Text>
            </TouchableOpacity>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Drop Off Location</Text>
            <TouchableOpacity style={styles._location_btn}>
              <Ionicons name="location" size={24} color="black" />
              <Text style={styles._location_btn_text}>Jackson Height, NY.</Text>
            </TouchableOpacity>

            {/* =====================> <===================== */}
            <View style={styles._counter_main}>
              <Text style={styles._title_heading2}>Number of Passengers</Text>
              <View style={styles._counter_show_main}>
                <TouchableOpacity
                  onPress={() => increaseCounter()}
                  style={styles.increseBtn}
                >
                  <Ionicons name="add" size={14} color="black" />
                </TouchableOpacity>
                <Text style={styles._counter_show}>{counter}</Text>
                <TouchableOpacity
                  onPress={() => decreaseCounter()}
                  style={styles.increseBtn}
                >
                  <Ionicons name="remove" size={14} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
:null  }
          {/* =====================> <===================== */}

          {
              value2 === "Rent a Vehicle"?
          
          <View style={styles._RentVehicle_view_main}>
            <Text style={styles._title_heading}>Make / Model</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Sedan"
              zIndex={-1000}
              zIndexInverse={-1000}
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#fff",
                width: "100%",
                borderRadius: 5,
              }}
              containerStyle={{
                width: "50%",
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

            {/* =====================> <===================== */}
            <View style={styles._date_time_pciker_main}>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Start Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>End Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Special Comments</Text>
            <View style={styles._input_view_main}>
              <TextInput
                style={styles.input}
                placeholder="Write Here..."
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          </View>
:null}
          {/* =====================> <===================== */}
          {
              value2 === "Request a Driver"?
          
          <View style={styles._RequestaDriver_view_main}>
            {/* =====================> <===================== */}
            <View style={styles._date_time_pciker_main}>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Start Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>End Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <View style={styles._date_time_pciker_main}>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Start Time</Text>
                <View style={styles._date_main}>
                  <View style={styles._time_show}>
                    <TimePicker />
                  </View>
                  <View style={styles._time_show2}>
                    <DropDownPicker
                      open={open3}
                      value={value3}
                      items={items3}
                      setOpen={setOpen3}
                      setValue={setValue3}
                      setItems={setItems3}
                      placeholder="PM"
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: "#fff",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      textStyle={{
                        fontSize: 16,
                        color: "#8F92A1",
                      }}
                      labelStyle={{
                        fontSize: 12,
                        color: "#8F92A1",
                      }}
                      arrowIconStyle={{ color: "#8F92A1" }}
                    />
                  </View>
                  <Entypo name="stopwatch" size={24} color="white" />
                </View>
              </View>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>End Time</Text>
                <View style={styles._date_main}>
                  <View style={styles._time_show}>
                    <TimePicker />
                  </View>
                  <View style={styles._time_show2}>
                    <DropDownPicker
                      open={open3}
                      value={value3}
                      items={items3}
                      setOpen={setOpen3}
                      setValue={setValue3}
                      setItems={setItems3}
                      placeholder="PM"
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: "#fff",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      textStyle={{
                        fontSize: 16,
                        color: "#8F92A1",
                      }}
                      labelStyle={{
                        fontSize: 12,
                        color: "#8F92A1",
                      }}
                      arrowIconStyle={{ color: "#8F92A1" }}
                    />
                  </View>
                  <Entypo name="stopwatch" size={24} color="white" />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Special Comments</Text>
            <View style={styles._input_view_main}>
              <TextInput
                style={styles.input}
                placeholder="Write Here..."
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          </View>
          :null}

          {/* =====================> <===================== */}
          {
              value2 === "Haulage"?
          
          <View style={styles._Haulage_view_main}>
            <Text style={styles._title_heading}>Type of Truck</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="5 Ton"
              zIndex={-1000}
              zIndexInverse={-1000}
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#fff",
                width: "100%",
                borderRadius: 5,
              }}
              containerStyle={{
                width: "50%",
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

            {/* =====================> <===================== */}
            <View style={styles._date_time_pciker_main}>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Date</Text>
                <View style={styles._date_main}>
                  <View style={styles._date_show}>
                    <DatePciker />
                  </View>
                  <FontAwesome5
                    name="calendar-alt"
                    size={24}
                    color="white"
                    style={{ marginTop: 10 }}
                  />
                </View>
              </View>
              <View style={styles._date_picker}>
                <Text style={styles._title_heading}>Time</Text>
                <View style={styles._date_main}>
                  <View style={styles._time_show}>
                    <TimePicker />
                  </View>
                  <View style={styles._time_show2}>
                    <DropDownPicker
                      open={open3}
                      value={value3}
                      items={items3}
                      setOpen={setOpen3}
                      setValue={setValue3}
                      setItems={setItems3}
                      placeholder="PM"
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: "#fff",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      textStyle={{
                        fontSize: 16,
                        color: "#8F92A1",
                      }}
                      labelStyle={{
                        fontSize: 12,
                        color: "#8F92A1",
                      }}
                      arrowIconStyle={{ color: "#8F92A1" }}
                    />
                  </View>
                  <Entypo name="stopwatch" size={24} color="white" />
                </View>
              </View>
            </View>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Pick Up Location</Text>
            <TouchableOpacity
              style={styles._location_btn}
              onPress={() => locationPermission()}
            >
              <Ionicons name="location" size={24} color="black" />
              <Text style={styles._location_btn_text}>
                Mermaid beach road, Luciana
              </Text>
            </TouchableOpacity>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Drop Off Location</Text>
            <TouchableOpacity style={styles._location_btn}>
              <Ionicons name="location" size={24} color="black" />
              <Text style={styles._location_btn_text}>Jackson Height, NY.</Text>
            </TouchableOpacity>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Cargo Description</Text>
            <View style={styles._input_view_main}>
              <TextInput
                style={styles.input}
                placeholder="Write Here..."
                placeholderTextColor="black"
                multiline={true}
              />
            </View>

            {/* =====================> <===================== */}
            <Text style={styles._title_heading}>Special Requirements</Text>
            <View style={styles._input_view_main}>
              <TextInput
                style={styles.input}
                placeholder="Write Here..."
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          </View>
          :null}
          {/* =====================> <===================== */}
          <TouchableOpacity
            style={styles._continue_btn}
             onPress={() => props.navigation.navigate("DriverDetails")}
          >
            <Text style={styles._continue_btn_txt}>CONFIRM</Text>
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
  _header_main: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImg: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    marginRight: 10,
  },
  _header_profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _title_heading: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  _title_heading2: {
    color: "white",
    fontSize: 18,
  },
  _date_main: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _date_show: {
    width: "80%",
  },
  _date_time_pciker_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  _date_picker: {
    width: "48%",
  },
  _time_show: {
    width: "40%",
  },
  _time_show2: {
    width: "50%",
  },
  _location_btn: {
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 50,
  },
  _location_btn_text: {
    fontSize: 16,
    paddingLeft: 10,
  },
  _counter_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _counter_show_main: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  increseBtn: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  _counter_show: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
  _taxi_view_main: {
    // display: "none",
  },
  _Haulage_view_main: {},
  _RequestaDriver_view_main: {
    // display: "none",
  },
  _RentVehicle_view_main: {
    // display: "none",
  },
  _input_view_main: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "black",
  },
});
