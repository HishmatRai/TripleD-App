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
} from "@expo/vector-icons";
export default function DispatcherPendingRequestTwo(props) {
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
      <Text style={styles._request_notification}>You have 10 New Request</Text>

      {/* =====================> <===================== */}
      <View style={styles._jobs_tabs_main}>
        <TouchableOpacity
          style={styles._pending_jobs_btn}
          onPress={() => props.navigation.navigate("DispatcherPendingRequest")}
        >
          <Text style={styles._pending_jobs_btn_text}>Pending Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._completed_jobs_btn}
          onPress={() =>
            props.navigation.navigate("DispatcherConfirmedRequest")
          }
        >
          <Text style={styles._completed_jobs_btn_text}>Confirmed Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._completed_jobs_btn}
          onPress={() => props.navigation.navigate("DispatcherCompletedJobs")}
        >
          <Text style={styles._completed_jobs_btn_text}>Completed Jobs</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* =====================> <===================== */}
        <View style={styles._main}>
          {/* =====================> <===================== */}
          {CardData.map((v, i) => {
            return (
              <View style={styles._Card_main}>
                <View style={styles._request_main}>
                  <Text style={styles._request_id_show}>{v.date}</Text>
                  <Text style={styles._request_id_show}>{v.id}</Text>
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
                          <Text style={styles._location_show}>
                            996 Daine Street
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles._Card_header_km_main}>
                      <View style={styles._call_message_main}>
                        <TouchableOpacity>
                          <Ionicons name="call" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <MaterialIcons
                            name="message"
                            size={24}
                            color="white"
                          />
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
                  <View style={styles._confimed_main}>
                    <Text style={styles._confirmed_heading}>
                      Service Request: Rent a Vehicle
                    </Text>
                    <TouchableOpacity style={styles._confimed_btn}>
                      <Text style={styles._confimed_btn_text}>Pending</Text>
                    </TouchableOpacity>
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
                          <Text style={{ color: "white", fontSize: 13 }}>
                            Pickup Location
                          </Text>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            Fresh Market
                          </Text>
                        </View>
                      </View>
                      <View style={styles._accept_portion_main}>
                        <View>
                          <Text style={{ color: "white", fontSize: 13 }}>
                            Destination Location
                          </Text>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            My Home
                          </Text>
                        </View>
                      </View>

                      <View style={styles._buttons_main}>
                        <TouchableOpacity style={styles._assign_driver_btn} onPress={() => props.navigation.navigate("DispatcherCompletedJobs")}>
                          <Text style={styles._assign_driver_btn_text}>
                            Assign Driver
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._assign_driver_btn} onPress={() => props.navigation.navigate("DriversNearByYou")}>
                          <Text style={styles._assign_driver_btn_text}>
                            Assign Vehicle
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
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
    fontSize: 18,
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  _jobs_tabs_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  _pending_jobs_btn: {
    borderBottomColor: "#033CDF",
    borderBottomWidth: 6,
    width: "33%",
    alignItems: "center",
    paddingBottom: 10,
  },
  _pending_jobs_btn_text: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
  _completed_jobs_btn: {
    width: "33%",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomColor: "#3F4E87",
    borderBottomWidth: 6,
  },
  _completed_jobs_btn_text: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  _Card_main: {
    marginBottom: 30,
  },
  _request_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _request_id_show: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
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
    justifyContent: "space-between",
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
    borderRadius: 10,
  },
  _user_name: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  _location_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _location_show: {
    color: "white",
    fontSize: 10,
  },
  _call_message_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _km_show_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _km: {
    color: "white",
    fontSize: 11,
  },
  _Card_body_main: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_dots_main: {
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
  },
  card_data_main: {
    width: "90%",
  },
  _big_dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "white",
    marginVertical: 10,
  },
  _small_dot: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: "white",
    marginVertical: 3,
  },
  _ignore_portion_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 20,
    marginBottom: 10,
  },
  _accept_portion_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop:10
  },
  _confimed_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _confirmed_heading: {
    color: "white",
    fontSize: 14,
  },
  _confimed_btn: {
    backgroundColor: "#00915B",
    borderRadius: 20,
    width: "25%",
    alignItems: "center",
  },
  _confimed_btn_text: {
    fontSize: 10,
    color: "white",
    paddingVertical: 3,
  },
  _buttons_main: {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:20
  },
  _assign_driver_btn: {
    backgroundColor: "#C40014",
    width:"45%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  },
  _assign_driver_btn_text: {
    fontSize: 14,
    color: "white",
    paddingVertical:5,
    textAlign:"center"
  },
});
