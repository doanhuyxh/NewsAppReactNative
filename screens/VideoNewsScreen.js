import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "../Config/Axios";
import GroupNewsCategory from "../components/GroupNewsCategory";
import { products, category, BaseUrl } from "../Config";

function VideoNewsScreen() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [news, setNews] = useState([]);
  const navigation = useNavigation();
  const getRandomElementsFromArray = (array, numberOfElements) => {
    if (numberOfElements > array.length) {
      return [];
    }
    const copyArray = [...array];
    const randomElements = [];
    for (let i = 0; i < numberOfElements; i++) {
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      randomElements.push(copyArray.splice(randomIndex, 1)[0]);
    }
    return randomElements;
  };

  const getCategoryData = () => {
    return axios
      .get("/api/v1/Items/GetAllCategoryMobile")
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
  };

  const getProductData = () => {
    return axios
      .get("/api/v1/Items/GetAllProductMobie")
      .then((data) => {
        let count = data.products.length;
        let list = [];
        for (let i = 0; i < count; i++) {
          list.push(data.products[i]);
        }
        return list;
      })
      .catch((err) => {
        setLoading(false);
        let list = [];
        for (let i = 0; i < 21; i++) {
          list.push(products[i]);
        }
        return list;
      });
  };

  useEffect(() => {
    Promise.all([getCategoryData(), getProductData()]).then((results) => {
      const [categoryData, productData] = results;
      let temp = [];
      for (let i = 0; i < categoryData.length; i++) {
        let cate = categoryData[i];
        let news = productData
          .filter((k) => k.cateID.includes(cate.id))
          .splice(0, 5);
        temp.push({ cate, news });
      }
      setNewsData(temp);
      setNews(productData);
      setLoading(false);
    });
  }, []);
  // for(let i= 0; i< 5;i++){
  //     items.push(<View>
  //         <Video className="w-full h-64" key={i}
  //                source={{
  //                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  //                }}
  //                useNativeControls
  //                resizeMode={ResizeMode.CONTAIN}
  //                isLooping
  //         />
  //         <View>
  //             <Text className="text-2xl text-center">
  //                 Đây là tiêu đề video lần {i}
  //             </Text>
  //         </View>
  //     </View>)
  // }
  return (
    <ScrollView>
    {news.map((item, index) => {
      if (item.videoPath != "https://devtest.ink") {
        return (
          <View className="flex-col" key={index}>
            <Video
              className="w-full h-64"
              source={{
                uri: item.videoPath,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
            />
            <View>
              <Text className="text-2xl text-center">{item.title}</Text>
            </View>
          </View>
        );
      }
    })}
  </ScrollView>
  
  );
}

export default VideoNewsScreen;
