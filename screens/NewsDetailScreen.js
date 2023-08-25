import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

function NewsDetailScreen() {

    return (
        <ScrollView>
            <View className="flex-1 mt-3 mx-2">
                <Text className="break-words text-3xl font-bold">Cựu Chủ tịch TP Hà Nội Nguyễn Đức Chung hầu tòa lần thứ 4</Text>
                <Text className="my-2 opacity-50">Nguồn: cand.com.vn</Text>
                <Text className="break-words text-2xl font-bold">
                    Sáng 25/8, TAND TP Hà Nội mở phiên tòa hình sự sơ thẩm xét xử cựu Chủ tịch UBND TP Hà Nội Nguyễn Đức Chung trong vụ nâng giá cây xanh. Đây là vụ án thứ 4, bị cáo Nguyễn Đức Chung phải hầu tòa. Trước đó, bị cáo Nguyễn Đức Chung đã bị tuyên phạt 3 bản án với tổng hình phạt 12 năm tù về  tội “Chiếm đoạt tài liệu bí mật Nhà nước” và tội “Lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ”.
                </Text>

            </View>
        </ScrollView>
    );
}


export default NewsDetailScreen;
