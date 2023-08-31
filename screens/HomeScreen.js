import React, {Component, useEffect, useState} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import NewsInCategory from "../components/NewsInCategory";
import {AddCate, EmptyCate, getCate} from "../slices/CategorySlice";
import axios from "../Config/Axios";
import {AddNews, EmptyNews, getAllNews} from "../slices/NewsSlice";
import RenderHtml from 'react-native-render-html'
import HTML from 'react-native-render-html'

function HomeScreen() {
    const htmlData = `"<p><strong>(VTC News) -</strong></p><h2><strong>Ca sĩ Trung Quân, Lương Bích Hữu, Khổng Tú Quỳnh… không khỏi bất ngờ trước chính sách “Xài đã không thích thì trả” của Di Động Việt.</strong></h2><p>Cụ thể, khi mua Galaxy Z Fold5, Z Flip5 tại đây, nếu không thích, người dùng có thể hoàn trả sản phẩm và nhận lại 100% chi phí bỏ ra, kể cả gói bảo hành, phụ kiện khi mua kèm máy, áp dụng trong 30 ngày kể từ ngày mua hàng.</p><p>Người dùng sẽ không mất thêm chi phí khi tham gia chính sách này. Máy đem trả phải đảm bảo không bị hư hại do chịu tác động chủ động của người dùng như trầy cấn, móp, rơi vỡ, vào nước, mất vân tay và còn đầy đủ phụ kiện, hộp máy đi kèm.</p><p><img src=\\"https://cdn-i.vtcnews.vn/resize/th/upload/2023/08/18/image001-14471882.png\\" alt=\\"Di Động Việt tung chính sách “Xài đã không thích thì trả” khi mua Galaxy Z Fold5, Z Flip5.\\"></p><p>Di Động Việt tung chính sách “Xài đã không thích thì trả” khi mua Galaxy Z Fold5, Z Flip5.</p><p>Ngay sau khi thông tin này được đăng tải, nhiều người dùng không khỏi bất ngờ trước độ “chịu chơi” của Di Động Việt. Trong đó có không ít người nổi tiếng, như MC Trác Thúy Miêu, Trung Quân idol, ca sĩ Lương Bích Hữu, Khổng Tú Quỳnh, diễn viên Quỳnh Nga…</p><p><img src=\\"https://cdn-i.vtcnews.vn/resize/th/upload/2023/08/18/image003-14474013.png\\" alt=\\"Trung Quân idol mua Galaxy Z Fold5 tại Di Động Việt.\\"></p><p>Trung Quân idol mua Galaxy Z Fold5 tại Di Động Việt.</p><p>Tại buổi mở bán sớm của Di Động Việt, Trung Quân idol đã không giấu nổi vẻ ngạc nhiên vì thời gian “dùng thử” lên đến 30 ngày. “<i>Chính sách này sẽ kích thích người dùng muốn mua sản phẩm hơn, để có thể trải nghiệm lâu dài mà không cần lo nó có phù hợp với mình không, vì nếu không thì trả lại sản phẩm và nhận 100% số tiền đã bỏ ra</i>”, Trung Quân idol cho biết.</p><p>Đồng quan điểm, ca sĩ Khổng Tú Quỳnh cho biết, đây là một chính sách mà khách hàng mua điện thoại tại Di Động Việt rất thích, vì đôi khi họ không thật sự biết được sản phẩm đó có phù hợp với mình hay không, chỉ khi sử dụng một thời gian rồi mới biết được.</p><p><img src=\\"https://cdn-i.vtcnews.vn/resize/th/upload/2023/08/18/image005-14475147.png\\" alt=\\"MC Trác Thúy Miêu, Fashionisto Thuận Nguyễn vui vẻ nhận máy Galaxy Z Fold5, Z Flip5.\\"></p><p>MC Trác Thúy Miêu, Fashionisto Thuận Nguyễn vui vẻ nhận máy Galaxy Z Fold5, Z Flip5.</p><p>&nbsp;</p><p>Trong khi đó, MC Trác Thúy Miêu <a href=\\"https://didongviet.vn/dien-thoai/samsung-galaxy-z-flip5-5g-512gb.html?utm_source=PR&amp;utm_medium=kols\\">mua Galaxy Z Flip5 tại Di Động Việt</a>, cho biết, dưới góc độ của một người dùng, đây là chính sách rất chịu chơi. Hệ thống này đã tin tưởng người dùng và tin tưởng vào sản phẩm của hãng vì rủi ro là rất lớn nếu người dùng cố ý muốn trả hàng, hoặc sản phẩm không được như kỳ vọng.</p><p>“<i>Tôi tin tưởng với chính sách này thì xác suất rủi ro của người mua hàng là rất thấp</i>”, nữ MC này nhấn mạnh.</p>",`;
    const windowWidth = useWindowDimensions().width;
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


