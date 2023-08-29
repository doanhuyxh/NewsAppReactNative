import {Provider} from "react-redux"
import {useEffect, useState} from 'react';
import Navigation from './Config/Navigation'
import {store} from "./Config/configureStore";
import axios from "./Config/Axios";
import {sendPushNotification, registerForPushNotificationsAsync} from "./Config/Notifications";

export default function App() {
    let count = 0;
    const data = {
        title:"",
        body:"",
    }
    useEffect(() => {
        registerForPushNotificationsAsync().then(r => {});
    }, []);

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
