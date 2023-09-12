import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import ItemNewsCategory from "./ItemNewsCategory";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setTitle} from "../slices/HeaderTitleSlice";
import RenderHTML from "react-native-render-html";
import HTML from "react-native-render-html";
import {ImgTestPath} from "../Config/ImgTestPath";

function GroupNewsCategory({data, category}) {
    const item2 = [];
    const item1 = []

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {width} = useWindowDimensions();

    const ChangeScreen = () => {
        console.log(category.nameCate)
        dispatch(setTitle(category.nameCate))
        navigation.navigate("AllNewsScreenByCategory", {categoryId: category.id})
    }
    for (let i = 1; i < 3; i++) {
        item1.push(<View className="w-1/2 rounded-2xl overflow-hidden px-2 drop-shadow-3xl bg-gray-200/95 mt-4"
                         key={i}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("DetailNews", {newsId: data[i].id})
            }}>
                <Image source={{uri: data[i].mainImg}} className="w-full h-32 object-cover m-auto"/>
                <Text className="text-lg m-auto break-words h-20 overflow-hidden">{data[i].title}</Text>
            </TouchableOpacity>
        </View>);
    }

    for (let i = 3; i < 5; i++) {
        item2.push(<View className="w-1/2 rounded-2xl overflow-hidden px-2 drop-shadow-3xl bg-gray-200/95 mt-8"
                         key={i}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("DetailNews", {newsId: data[i].id})
            }}>
                <Image source={{uri: data[i].mainImg}} className="w-full h-32 object-cover m-auto"/>
                <Text className="text-lg m-auto break-words h-20 overflow-hidden">{data[i].title}</Text>
            </TouchableOpacity>
        </View>);
    }

    return (
        <View className="rounded-2xl mt-1 overflow-hidden">
            <View className="bg-red-600 h-12 justify-center">
                <Text className="text-2xl font-bold text-white mx-2">{category.nameCate}</Text>
            </View>

            <View className="flex-col">
                <View className="columns-12">
                    <Image source={{uri: data[0].mainImg}} className="w-full h-80 object-cover"/>
                    <View className="p-2">
                        <Text className="text-xl font-bold px-1.5">{data[0].title}</Text>
                        <View className="w-fit flex-row mt-1">
                            <Text className="border-0.5 rounded-xl opacity-50 p-1.5">Nguồn {data[0].src.replace("https://www.", "").replace(":", "").replace("/", "")}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="flex flex-row">
                        {item1}
                    </View>
                    <View className="flex flex-row">
                        {item2}
                    </View>
                </View>
            </View>

            <View className="w-full flex-row align-middle justify-center">
                <TouchableOpacity className="bg-red-500 h-10 justify-center w-36 rounded-3xl mt-2.5"
                                  onPress={ChangeScreen}>
                    <Text className="font-bold text-sm text-white text-center">Xem thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default GroupNewsCategory;
