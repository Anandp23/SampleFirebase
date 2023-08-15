import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../../Main';
import LoginScreen from '../utils/screens/LoginScreen';
import SignupScreen from '../utils/screens/SignupScreen';
import Homescreen from '../utils/screens/HomeScreen';
import DataFetching from '../datafetching/DataFetching';
import MobileNumber from '../otp/MobileNumber';
import MobileLogin from '../otp/MobileLogin';

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                

                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Otp" component={MobileLogin} options={{ headerShown: false }} />
                <Stack.Screen name="DataFetching" component={DataFetching} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;