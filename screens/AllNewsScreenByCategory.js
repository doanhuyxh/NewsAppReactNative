import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import ItemNewsCategory from "../components/ItemNewsCategory";

function AllNewsScreenByCategory() {

    return (
        <ScrollView>
            <ItemNewsCategory />
            <ItemNewsCategory />
            <ItemNewsCategory />
            <ItemNewsCategory />
            <ItemNewsCategory />
        </ScrollView>
    );
}

export default AllNewsScreenByCategory;
