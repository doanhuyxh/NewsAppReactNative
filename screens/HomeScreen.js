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
import GroupNewsCategory from "../components/GroupNewsCategory";
import axios from "../Config/Axios";
import {getSelectedCategory} from "../slices/SelectedCategorySlice";
import ItemNewsCategory from "../components/ItemNewsCategory";
import {products, category, BaseUrl} from "../Config";
import Axios from "../Config/Axios";
import {setTitle} from "../slices/HeaderTitleSlice";

function HomeScreen() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);
    dispatch(setTitle("Trang chủ"))
    const getCategoryData = () => {
        return axios.get("/api/v1/Items/GetAllCategoryMobile")
            .then((data) => {
                let count = data.category.length;
                for (let i = 0; i < count; i++) {
                    list.push(data.category[i]);
                }
                return list;
            })
            .catch((err) => {
                let list = [];
                for (let i = 0; i < 3; i++) {
                    list.push(category[i]);
                }
                return list;
            });
    }

    const getProductData = () => {
        return axios.get("/api/v1/Items/GetAllProductMobie")
            .then((data) => {
                let count = data.products.length;
                let list = [];
                for (let i = 0; i < count; i++) {
                    list.push(data.products[i]);
                }
                return list
            })
            .catch((err) => {
                setLoading(false);
                let list = [];
                for (let i = 0; i < 21; i++) {
                    list.push(products[i]);
                }
                return list
            });
    }

    useEffect(() => {

        Promise.all([getCategoryData(), getProductData()])
            .then((results) => {
                const [categoryData, productData] = results;
                let temp = []
                console.log(categoryData)
                for(let i = 0; i < categoryData.length; i++){
                    let cate = categoryData[i];
                    let news = productData.filter(k=>k.cateID.includes(cate.id)).splice(0, 4)
                    temp.push({cate, news})
                }
                setNewsData(temp);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <View className="w-full h-screen relative">
                <View className="absolute top-1/2 left-1/3">
                    <Text className="text-lg text-green-600">Đang tải dữ liệu...</Text>
                </View>
            </View>
        );
    } else {

        return (
            <ScrollView>
                {
                    newsData.map((item, index)=>{
                        return <GroupNewsCategory category={item.cate} data={item.news}  key={index}/>
                    })
                }
            </ScrollView>

        );
    }
}

export default HomeScreen;
