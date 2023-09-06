import React, {useEffect, useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ItemCategory from "../components/ItemCategory";
import {AddCate, EmptyCate, getCate} from "../slices/CategorySlice";
import axios from "../Config/Axios";


function HomeScreen() {
    const dispatch = useDispatch();
    const [listCate, setListCate] = useState([]);
    let listCategory = useSelector(getCate)
    useEffect(() => {
        dispatch(EmptyCate([]))
        axios.get("/api/v1/Items/GetAllCategoryMobile")
            .then(data => {
                let count = data.category.length;
                for (let i = 0; i < count; i++) {
                    dispatch(AddCate(data.category[i]));
                }
            });
    }, []);

    useEffect(() => {
        console.log(listCategory)
        setListCate(listCategory);
    }, [listCategory]);

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
            </ScrollView>
        </SafeAreaView>
    );
    a
}

export default HomeScreen;


