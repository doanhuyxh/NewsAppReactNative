import {Provider} from "react-redux"
import {useEffect, useState} from 'react';
import Navigation from './Config/Navigation'
import {store} from "./Config/configureStore";
import {sendPushNotification, registerForPushNotificationsAsync} from "./Config/Notifications";

export default function App() {
    let count = 0;
    const data = {
        title:"",
        body:"",
    }
    useEffect(() => {
        registerForPushNotificationsAsync().then(r => {});
        setInterval(()=>{
            count++;
            data.title = `lần thứ ${count}`
            data.body = `${new Date(Date.now()).toLocaleString()}`
            sendPushNotification(data).then(r => {})
        }, 6000)
    }, []);

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
