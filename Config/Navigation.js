import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllNewsScreenByCategory from "../screens/AllNewsScreenByCategory";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import {ColorCustom} from './index.js'

const Stack = createNativeStackNavigator();

function Navigation() {
    const title = "Trang tin tức"
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} screenOptions={{headerShown: false}}/>
                <Stack.Screen name="AllNewsScreenByCategory" component={AllNewsScreenByCategory}
                              options={{
                                  headerStyle: {backgroundColor: ColorCustom.headerColor},
                                  headerTintColor: 'white',
                                  headerTitle: title
                              }}/>
                <Stack.Screen name="DetailNews" component={NewsDetailScreen}
                              options={{
                                  headerStyle: {backgroundColor: ColorCustom.headerColor},
                                  headerTintColor: 'white',
                                  headerTitle: title
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
