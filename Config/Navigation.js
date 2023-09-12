import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllNewsScreenByCategory from "../screens/AllNewsScreenByCategory";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import {ColorCustom} from "./index.js";
import {useSelector} from "react-redux";
import {getTitle} from "../slices/HeaderTitleSlice";
import VideoNewsScreen from "../screens/VideoNewsScreen";
import {Button, Image, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import AppStack from "../components/AppStack";
import {AddCate, EmptyCate, getCate} from "../slices/CategorySlice";
import "react-native-gesture-handler";

import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
    let title = useSelector(getTitle);
    let cate = useSelector(getCate);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({navigation}) => ({
                        headerTitle: "",
                        drawerLabel: "Trang chủ",
                        headerRight: () => {
                            return (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <TouchableOpacity onPress={(navigation)=>{
                                        //navigation.openDrawer();
                                    }}>
                                        <Entypo name="home" size={38}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            marginLeft: 4,
                                            paddingLeft: 8,
                                            borderLeftWidth: 1,
                                            borderLeftColor: "white",
                                        }}
                                        onPress={() => navigation.navigate("VideoNewsScreen")}
                                    >
                                        <Image style={{
                                            width:40,
                                            height: 40,
                                            marginEnd: 10
                                        }} source={{uri:"https://devtest.ink/upload/video_icon.png"}} />
                                    </TouchableOpacity>
                                </View>
                            );
                        },
                        headerStyle: {
                            backgroundColor: ColorCustom.headerColor,
                        },
                    })}
                />
                {cate.map((category, index) => (
                    <Drawer.Screen
                        key={index}
                        name={category.nameCate}
                        component={AllNewsScreenByCategory}
                        initialParams={{categoryId: category.id}}
                        options={{
                            headerStyle: {backgroundColor: ColorCustom.headerColor},
                            headerTintColor: "white",
                            headerTitle: category.nameCate,
                        }}

                    />
                ))}
                <Drawer.Screen
                    name="DetailNews"
                    component={NewsDetailScreen}
                    options={{
                        headerStyle: {backgroundColor: ColorCustom.headerColor},
                        headerTintColor: "white",
                        headerTitle: "",
                        drawerLabel: "",
                    }}
                />
                <Drawer.Screen
                    name="VideoNewsScreen"
                    component={VideoNewsScreen}
                    options={{
                        headerStyle: {backgroundColor: ColorCustom.headerColor},
                        drawerLabel: "",
                        headerTintColor: "white",
                        headerTitle: "Video",
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
