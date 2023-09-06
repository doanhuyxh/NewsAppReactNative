import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import axios from "../Config/Axios";
import {BaseUrl} from "../Config";
import HTML from 'react-native-render-html';
function NewsDetailScreen() {
    const { width } = useWindowDimensions();
    const route = useRoute();
    const newsId = route.params.newsId;
    console.log("newsId", newsId)
    const [title, setTitle] = useState()
    const [src, setSrc] = useState()
    const [mainImg, setMainImg] = useState()
    const [des, setDes] = useState('')
    useEffect(()=>{
        console.log("newsId", newsId)
        axios.get(`/api/v1/Items/KeyProducts/${newsId}`)
            .then(data=>{
                setTitle(data.newsData.title)
                setSrc(data.newsData.src)
                setMainImg(data.newsData.mainImg)
                setDes(data.newsData.description)
            });
    }, [newsId])
    return (
        <ScrollView>
            <View className="flex-1 mt-3 mx-2">
                <Text className="break-words text-3xl font-bold">{title}</Text>
                <Text className="my-2 opacity-50">Nguồn: {src}</Text>
                <Image className="w-full h-72 object-contain" source={{uri : `${BaseUrl}${mainImg}` }}/>
                <HTML source={{html:des}} contentWidth={width}/>
            </View>
        </ScrollView>
    );
}
export default NewsDetailScreen;
