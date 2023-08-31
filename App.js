import {Provider} from "react-redux"
import {useEffect, useState} from 'react';
import Navigation from './Config/Navigation'
import {store} from "./Config/configureStore";
import axios from "./Config/Axios";
import {sendPushNotification, registerForPushNotificationsAsync} from "./Config/Notifications";

export default function App() {
    let count = 0;
    const data = {
        title:"Thông báo lần thứ 1",
        body:"Hello",
    }
    useEffect(() => {
        registerForPushNotificationsAsync().then(r => {
        });
        setInterval(function () {
            data.title = `Thông báo tin tức ${count}`
            data.body=`Ông trum ma túy bị công an bắt giam lần ${count}`
            count++;
            sendPushNotification(data).then(r=>{})
        }, 5000)
    }, []);

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
