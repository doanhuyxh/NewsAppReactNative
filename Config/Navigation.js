import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllNewsScreenByCategory from "../screens/AllNewsScreenByCategory";
import NewsDetailScreen from "../screens/NewsDetailScreen";


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} screenOptions={{headerShown: false}}/>
                    <Stack.Screen name="AllNewsScreenByCategory" component={AllNewsScreenByCategory}/>
                    <Stack.Screen name="DetailNews" component={NewsDetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Navigation;
