import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllNewsScreen from "../screens/AllNewsScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import VideoNewsScreen from "../screens/VideoNewsScreen";
import VideoDetailScreen from "../screens/VideoDetailScreen";
import ShopEcoScreen from "../screens/ShopEcoScreen";


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Loading">
                <Stack.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false }}/>
                <Stack.Screen name="AllNews" component={AllNewsScreen}/>
                <Stack.Screen name="DetailNews" component={NewsDetailScreen}/>
                <Stack.Screen name="Video" component={VideoNewsScreen}/>
                <Stack.Screen name="DetailVideo" component={VideoDetailScreen}/>
                <Stack.Screen name="Shop" component={ShopEcoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
