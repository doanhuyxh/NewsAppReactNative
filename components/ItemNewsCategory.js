import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ImgTestPath} from "../Config/ImgTestPath";
import {useNavigation} from "@react-navigation/native";

function ItemNewsCategory() {
    const navigation = useNavigation();
    const ChangeScreen = ()=>{
        navigation.navigate("DetailNews")
    }
    return (
        <TouchableOpacity onPress={ChangeScreen}>
            <View
                className="flex flex-1 p-1 py-2 pb-3 rounded-3xl overflow-hidden drop-shadow-2xl bg-amber-50/100 my-1.5">
                <Image className="w-full h-64" source={ImgTestPath.img2}/>
                <Text className="p-2 text-lg font-bold break-words">Sức mạnh quân sự Trung Quốc bám sát Nga, sắp trở
                    thành đối thủ chính của Mỹ</Text>
                <Text className="px-2 text-sm opacity-50">Nguồn: nld.com.vn</Text>
                <Text className="px-2 text-lg break-words">
                    (NLDD0)-Trang web Global Firepower (GFP) trong tuần này công bố danh sách xếp hạng sức mạnh quân sự
                    năm 2023,
                    trong đó Nga đứng sau Mỹ và Trung Quốc
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default ItemNewsCategory;
