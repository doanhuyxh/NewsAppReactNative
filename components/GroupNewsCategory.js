import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ItemNewsCategory from "./ItemNewsCategory";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setTitle} from "../slices/HeaderTitleSlice";

function GroupNewsCategory({data, category}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ChangeScreen = ()=>{
        console.log(category)
        dispatch(setTitle(category.nameCate))
        navigation.navigate("AllNewsScreenByCategory", {categoryId: category.id})
    }

    return (
        <View className="rounded-2xl mt-1 overflow-hidden">
            <View className="bg-red-400 h-12 justify-center">
                <Text className="text-lg font-bold text-white text-center">{category.nameCate}</Text>
            </View>
            <View className="flex-col">
                {
                    data.map((item, index)=>{
                        return <ItemNewsCategory data={item} key={index}/>
                    })
                }
            </View>

            <View className="w-full flex-row align-middle justify-center">
                <TouchableOpacity className="bg-red-500 h-10 justify-center w-36 rounded-3xl" onPress={ChangeScreen}>
                    <Text className="font-bold text-sm text-white text-center">Xem thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default GroupNewsCategory;
