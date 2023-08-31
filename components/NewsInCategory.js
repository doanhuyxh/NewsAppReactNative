import React, {Component, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ImgTestPath} from "../Config/ImgTestPath";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "../slices/HeaderTitleSlice";
import {getAllNews, Selec5tNewsByCateId} from "../slices/NewsSlice";
import axios from "../Config/Axios";

function NewsInCategory({cateId, data}) {
    const item2 = [];
    const item1 = [];
    const navigation = useNavigation();
    const dispatch = useDispatch();
    let news = useSelector(getAllNews);
    console.log("cateid", cateId)
    const changeScreen = () => {
        dispatch(setTitle(data))
        navigation.navigate("AllNewsScreenByCategory", {cateId})
    }
    const changeScreenDetail = () => {
        navigation.navigate("DetailNews")}

    useEffect(() => {
        axios.get("/api/v1/Items/GetAllProductMobie")
    }, []);


    for (let i = 0; i < 4; i++) {
        item1.push(<View className="w-1/2 rounded-2xl p-3 overflow-hidden drop-shadow-3xl bg-gray-200/95"
                         key={i}>
            <TouchableOpacity onPress={changeScreen}>
                <Image source={{uri:ImgTestPath.img3}} className="w-40 h-56 object-center m-auto"/>
                <Text className="text-lg px-1.5 m-auto break-words">Công an TPHCM: Quyết liệt triển khai nhằm bảo
                    TT...</Text>
            </TouchableOpacity>
        </View>);
        item2.push(<View className="w-1/2 rounded-2xl p-3 overflow-hidden drop-shadow-3xl bg-gray-200/95"
                         key={i}>
            <TouchableOpacity onPress={changeScreen}>
                <Image source={{uri:ImgTestPath.img3}} className="w-40 h-56 object-center m-auto"/>
                <Text className="text-lg px-1.5 m-auto break-words">Công an TPHCM: Quyết liệt triển khai nhằm bảo
                    TT...</Text>
            </TouchableOpacity>
        </View>);
    }
    return (
        <View className="container mb-6 drop-shadow-2xl">
            <View className="w-full bg-red-600 h-12 rounded-t-2xl">
                <Text className="text-2xl text-white m-auto ml-3">{data}</Text>
            </View>
            <TouchableOpacity onPress={changeScreenDetail}>
                <View className="w-full">
                    <Image className="w-full h-72" source={{uri:ImgTestPath.img4}}/>
                </View>
                <View className="w-full my-2 mx-2">
                    <Text className="text-black font-medium text-2xl p-0.5">Không thu quá 95% giá trị hợp đồng nếu chưa
                        có
                        sổ hồng</Text>
                    <Text className="text-sm opacity-50">Nguồn: congan.com.vn</Text>
                    <Text className="text-black text-xl p-0.5 break-words">
                        (CATP) Nội dung này dự kiến được Bộ Xây dựng bổ sung trong dự án Luật Kinh doanh bất động sản
                        (sửa
                        đổi) vừa được cơ quan tiếp thu
                    </Text>
                </View>
            </TouchableOpacity>
            <View>
                <View className="flex flex-row">
                    {item1}
                </View>
                <View className="flex flex-row">
                    {item2}
                </View>
            </View>
            <View className="flex-row justify-center h-12 align-middle mt-1">
                <Text onPress={changeScreen}
                      className="w-1/3 rounded-2xl text-2xl text-lime-50 bg-red-600 text-center mt-1">Xem thêm</Text>
            </View>
        </View>
    );
}


export default NewsInCategory;
