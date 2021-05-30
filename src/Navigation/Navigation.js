// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Login,
    SignUp,
    UserProfile,
    DriverDetails,
    RequestAService,
    DriveHome,
    CompleteJobs,
    Review,
    UserMap,
    DriverMap,
    DriverProfile,
    DriverMyProfile,
    PersonalDocument,
    AddVehicle,
    VehicleDocument,
    BankDetails,
    DriverThankyou,
    DispatcherPendingRequest,
    DispatcherPendingRequestTwo,
    DispatcherConfirmedRequest,
    DispatcherCompletedJobs,
    DriversNearByYou,
    AssignDriverConfirm,
    DispatcherMyVehicle,
    DispatcherThanks
} from './../Screens/index'
const Stack = createStackNavigator();
function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriverDetails" component={DriverDetails} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="RequestAService" component={RequestAService} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriveHome" component={DriveHome} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="CompleteJobs" component={CompleteJobs} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="Review" component={Review} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="UserMap" component={UserMap} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriverMap" component={DriverMap} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriverProfile" component={DriverProfile} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriverMyProfile" component={DriverMyProfile} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="PersonalDocument" component={PersonalDocument} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="AddVehicle" component={AddVehicle} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="VehicleDocument" component={VehicleDocument} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="BankDetails" component={BankDetails} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriverThankyou" component={DriverThankyou} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DispatcherPendingRequestTwo" component={DispatcherPendingRequestTwo} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DispatcherPendingRequest" component={DispatcherPendingRequest} options={{ headerShown: false }}/>
                <Stack.Screen name="DispatcherConfirmedRequest" component={DispatcherConfirmedRequest} options={{ headerShown: false }}/>
                <Stack.Screen name="DispatcherCompletedJobs" component={DispatcherCompletedJobs} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DriversNearByYou" component={DriversNearByYou} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="AssignDriverConfirm" component={AssignDriverConfirm} options={{ headerShown: false }}/> */}
                {/* <Stack.Screen name="DispatcherMyVehicle" component={DispatcherMyVehicle} options={{ headerShown: false }}/> */}
                <Stack.Screen name="DispatcherThanks" component={DispatcherThanks} options={{ headerShown: false }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;