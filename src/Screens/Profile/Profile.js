import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
import { Feather } from '@expo/vector-icons';
export default function Profile(props) {
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
                <ImageBackground source={require('./../../img/home_background.png')} style={styles._image}>
                    <TouchableOpacity style={styles._drawer_icon}>
                        <Feather name="align-center" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles._profile_main}>
                        <View style={styles.profileImg_main}>
                            <Image source={require('./../../img/profileImg.png')} style={styles.profileImg} />
                            <View style={styles._review_show_main}>
                                <Text style={styles._review_show}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles._user_name}>Aurélien Salomon</Text>
                        <Text style={styles._user_username}>@aureliensalomon</Text>
                    </View>
                </ImageBackground>
                <View style={styles._main}>
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
    _image: {
        height: 270,
        resizeMode: 'cover',
        width: "100%",
    },
    _drawer_icon: {
        marginTop: 80,
        alignSelf: "flex-end",
        marginRight: "10%"
    },
    _profile_main: {
        paddingHorizontal: 20
    },
    profileImg: {
        width: 64,
        height: 64,
        borderRadius: 10
    },
    profileImg_main: {
        // position:"relative"
    },
    _review_show_main:{
        backgroundColor:"#3ACCE1",
        width:25,
        height:25,
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:10,
        borderBottomEndRadius:10,
        position:"absolute",
        marginTop:39,
        marginLeft:39
    },
    _review_show:{
        color:"white",
        fontSize:10,
        fontWeight:"bold"
    },
    _user_name:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
        letterSpacing:0.5,
        marginTop:5
    },
    _user_username:{
        color:"white",
        fontSize:14,
        letterSpacing:0.5,
        marginTop:5
    }
});
