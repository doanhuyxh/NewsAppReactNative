import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
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
            })
    }, []);

    useLayoutEffect(()=>{
        if(categorySelected == 0) {
            setCur(listNews);
        }
        else{
            let newss = listNews.filter(i=>i.cateID.includes(categorySelected));
            setCur(newss);
        }
    },[categorySelected])
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="flex-row px-2 h-12 bg-amber-300 align-middle">
                    {
                        listCate.map((item, index) => {
                            return <ItemCategory data={item} key={index}/>
                        })
                    }
                </View>
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


