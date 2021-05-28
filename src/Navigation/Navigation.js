// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Login,
    SignUp,
    Profile,
    DriverDetails
} from './../Screens/index'
const Stack = createStackNavigator();
function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/> */}
                <Stack.Screen name="DriverDetails" component={DriverDetails} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;