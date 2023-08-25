import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import NewsInCategory from "../components/NewsInCategory";

function HomeScreen() {

    return (
        <ScrollView className="my-4">
            <NewsInCategory data = "Tin tức"/>
            <NewsInCategory data = "Xã hội"/>
            <NewsInCategory data = "Du lịch"/>
            <NewsInCategory data = "Thi cử"/>
        </ScrollView >
    );
}


export default HomeScreen;
