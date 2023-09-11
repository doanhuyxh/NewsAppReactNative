import * as React from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import {Video, ResizeMode} from "expo-av";

function VideoNewsScreen() {
    let items = [];
    for(let i= 0; i< 5;i++){
        items.push(<View>
            <Video className="w-full h-64" key={i}
                   source={{
                       uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                   }}
                   useNativeControls
                   resizeMode={ResizeMode.CONTAIN}
                   isLooping
            />
            <View>
                <Text className="text-2xl text-center">
                    Đây là tiêu đề video lần {i}
                </Text>
            </View>
        </View>)
    }
    return (
        <ScrollView>
            {items}
        </ScrollView>
    )

}


export default VideoNewsScreen;
