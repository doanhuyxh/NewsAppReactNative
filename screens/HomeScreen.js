import React, {Component, useEffect, useState} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import NewsInCategory from "../components/NewsInCategory";
import {AddCate, EmptyCate, getCate} from "../slices/CategorySlice";
import axios from "../Config/Axios";
import {AddNews, EmptyNews, getAllNews} from "../slices/NewsSlice";
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
        axios.get("/api/v1/Items/GetAllProductMobie")
            .then(data => {
                dispatch(EmptyNews([]))
                let count = data.products.length;
                for (let i = 0; i > count; i++) {
                    dispatch(AddNews(data.products[i]))
                }
            })
    }, [])

    useEffect(() => {
        setListCate(listCategory);
    }, [listCategory]);


    const customStyles = {
        baseStyle: {
            backgroundColor: "lightgray"
        }
    };
    return (
        <ScrollView className="my-4">
            {
                listCate.map(function (item, index) {
                    return <NewsInCategory key={index} cateId={item.id} data={item.nameCate}/>
                })
            }
        </ScrollView>
    );

}

export default HomeScreen;


