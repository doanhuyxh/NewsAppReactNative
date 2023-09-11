import React from "react";
import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import AllNewsScreenByCategory from "../screens/AllNewsScreenByCategory";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import { AddCate, EmptyCate, getCate } from "../slices/CategorySlice";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  let cate = useSelector(getCate);

  return (
    <Drawer.Navigator>
      {cate.map((category, index) => (
        <Drawer.Screen
          key={index}
          name={category.nameCate}
          component={AllNewsScreenByCategory}
          initialParams={{ categoryId: category.id }}
          options={{
            headerStyle: { backgroundColor: ColorCustom.headerColor },
            headerTintColor: "white",
            headerTitle: category.nameCate,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppStack;