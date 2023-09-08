import React, {useEffect, useLayoutEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {
    ScrollView,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AntDesign} from "@expo/vector-icons";
import _ from "lodash";
import ItemCategory from "../components/ItemCategory";
import axios from "../Config/Axios";
import {getSelectedCategory} from "../slices/SelectedCategorySlice";
import ItemNewsCategory from "../components/ItemNewsCategory";
import {products, category, BaseUrl} from "../Config";

function HomeScreen() {
    let bug = "";
    let categorySelected = useSelector(getSelectedCategory);
    const [listCate, setListCate] = useState([]);
    const [listNews, setListNews] = useState([]);
    const [cur, setCur] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(true);
    const HandleSreach = () => {
        let data;
        if (categorySelected == 0) {
            data = listNews.filter((i) => i.title.includes(inputText));
        } else {
            data = listNews.filter(
                (i) =>
                    i.cateID.includes(categorySelected) && i.title.includes(inputText)
            );
        }
        let temp = _.cloneDeep(data);
        setCur(temp);
    };


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                Alert.alert("Lỗi mạng", JSON.stringify(err));
            });


        fetch("http://devtest.ink/api/v1/Items/GetAllCategoryMobile")
            .then(res => res.json())
            .then((data) => {
                let count = data.category.length;
                let list = [{id: 0, nameCate: "Trang chủ"}];
                for (let i = 0; i < count; i++) {
                    list.push(data.category[i]);
                }
                let temp = _.cloneDeep(list);
                setListCate(temp);
            })
            .catch((err) => {
                let list = [{id: 0, nameCate: "Trang chủ"}];
                for (let i = 0; i < 3; i++) {
                    list.push(category[i]);
                }
                let temp = _.cloneDeep(list);
                setListCate(temp);
            });

        fetch("http://devtest.ink/api/v1/Items/GetAllProductMobie")
            .then(res => res.json())
            .then((data) => {
                let count = data.products.length;
                let list = [];
                for (let i = 0; i < count; i++) {
                    list.push(data.products[i]);
                }
                setLoading(false);
                let temp = _.cloneDeep(list);
                setListNews(temp);
                setCur(temp);
            })
            .catch((err) => {
                let list = [];
                for (let i = 0; i < 21; i++) {
                    list.push(products[i]);
                }
                setLoading(false);
                let temp = _.cloneDeep(list);
                setListNews(temp);
                setCur(temp);
            });
    }, []);

    useLayoutEffect(() => {
        if (categorySelected == 0) {
            let temp = _.cloneDeep(listNews);
            setCur(temp);
        } else {
            let newss = listNews.filter((i) => i.cateID.includes(categorySelected));
            let temp = _.cloneDeep(newss);
            setCur(temp);
        }
    }, [categorySelected]);

    if (loading) {
        return (
            <SafeAreaView className="pt-0.5 bg-yellow-50">
                <ScrollView>
                    <View className="">
                        <View className="w-full bg-red-700 h-16 justify-center align-middle relative inline-block">
                            <TextInput
                                className="h-12 bg-white px-2 mx-3 rounded-2xl"
                                placeholder="Nhập từ khóa"
                                value={inputText}
                                onChangeText={(text) => setInputText(text)}
                            />
                            <TouchableOpacity
                                className="absolute bottom-4 right-6"
                                onPress={HandleSreach}
                            >
                                <AntDesign name="search1" size={32} color="black"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="w-full h-screen relative">
                        <View className="absolute bottom-1/2 right-1/3">
                            <Text className="p-2 text-green-500 text-lg ">
                                Đang tải dữ liệu ...
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="pt-0.5 bg-yellow-50">
            <ScrollView>
                <View className="w-full bg-red-700 h-16 justify-center align-middle relative inline-block">
                    <TextInput
                        className="h-12 bg-white px-2 mx-3 rounded-2xl"
                        placeholder="Nhập từ khóa"
                        value={inputText}
                        onChangeText={(text) => setInputText(text)}
                    />
                    <TouchableOpacity
                        className="absolute bottom-4 right-6"
                        onPress={HandleSreach}
                    >
                        <AntDesign name="search1" size={32} color="black"/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row px-2 h-12 align-middle">
                    {listCate.map((item, index) => {
                        return <ItemCategory data={item} key={index}/>;
                    })}
                </View>
                <View className="w-full h-0.5 bg-yellow-50"></View>
                <View className="flex-col">
                    {cur.map((item, index) => {
                        return <ItemNewsCategory key={index} data={item}/>;
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
