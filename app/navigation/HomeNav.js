import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();

export default function HomeNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
    )
}
