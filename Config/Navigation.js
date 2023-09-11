import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllNewsScreenByCategory from "../screens/AllNewsScreenByCategory";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import {ColorCustom} from './index.js'
import {useSelector} from "react-redux";
import {getTitle} from "../slices/HeaderTitleSlice";
import VideoNewsScreen from "../screens/VideoNewsScreen";
import {Button, Image, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function Navigation() {
    let title = useSelector(getTitle);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
                    headerTitle: "",
                    headerRight: () => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Entypo name="home" size={38}/>
                                <TouchableOpacity style={{
                                    marginLeft: 4,
                                    paddingLeft: 8,
                                    borderLeftWidth: 1,
                                    borderLeftColor: "white"
                                }} onPress={() => navigation.navigate('VideoNewsScreen')}>
                                    <Entypo name="video" size={38}/>
                                </TouchableOpacity>
                            </View>
                        )
                    },
                    headerStyle: {
                        backgroundColor: ColorCustom.headerColor
                    }
                })}/>
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
                                  headerTitle: ""
                              }}/>
                <Stack.Screen name="VideoNewsScreen" component={VideoNewsScreen}
                              options={{
                                  headerStyle: {backgroundColor: ColorCustom.headerColor},
                                  headerTintColor: 'white',
                                  headerTitle: "Video"
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
