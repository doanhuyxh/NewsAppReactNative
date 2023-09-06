import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {AntDesign} from '@expo/vector-icons';
import ItemCategory from "../components/ItemCategory";
import axios from "../Config/Axios";
import {getSelectedCategory} from "../slices/SelectedCategorySlice";
import ItemNewsCategory from "../components/ItemNewsCategory";

function HomeScreen() {
    let categorySelected = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    const [listCate, setListCate] = useState([]);
    const [listNews, setListNews] = useState([]);
    const [cur, setCur] = useState([]);
    const [inputText, setInputText] = useState("");

    const HandleSreach = ()=>{
        let data;
        if(categorySelected == 0){
            data = listNews.filter(i=>i.title.includes(inputText))
        }
        else{
        data= listNews.filter(i=>i.cateID.includes(categorySelected) && i.title.includes(inputText))
        }
        console.log("data search", data.length)
        setCur(data)
    }
    useEffect(() => {
        axios.get("/api/v1/Items/GetAllCategoryMobile")
            .then(data => {
                let count = data.category.length;
                let list = [{"id": 0, "nameCate": "Trang chủ"}]
                for (let i = 0; i < count; i++) {
                    list.push(data.category[i])
                }
                setListCate(list);
            });
        axios.get("/api/v1/Items/GetAllProductMobie")
            .then(data => {
                let count = data.products.length;
                console.log("news count", count)
                let list = []
                for (let i = 0; i < count; i++) {
                    list.push(data.products[i])
                }
                setListNews(list);
                setCur(list);
            })
    }, []);

    useLayoutEffect(() => {
        if (categorySelected == 0) {
            setCur(listNews);
        } else {
            let newss = listNews.filter(i => i.cateID.includes(categorySelected));
            setCur(newss);
        }
    }, [categorySelected])
    return (
        <SafeAreaView className="pt-0.5">
            <ScrollView>
                <View className="w-full bg-red-700 h-16 justify-center align-middle relative inline-block">
                    <TextInput
                        className="h-12 bg-white px-2 mx-3 rounded-2xl"
                        placeholder="Nhập từ khóa"
                        value={inputText}
                        onChangeText={(text) => setInputText(text)}
                    />
                    <TouchableOpacity className="absolute bottom-4 right-6" onPress={HandleSreach}>
                        <AntDesign name="search1" size={32} color="black"/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row px-2 h-12 align-middle">
                    {
                        listCate.map((item, index) => {
                            return <ItemCategory data={item} key={index}/>
                        })
                    }
                </View>
                <View className="w-full h-0.5 bg-yellow-50"></View>
                <View className="flex-col">
                    {
                        cur.map((item, index) => {
                            return <ItemNewsCategory key={index} data={item}/>
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;


