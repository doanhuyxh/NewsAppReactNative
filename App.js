import {Provider} from "react-redux"
import {useEffect, useState} from 'react';
import Navigation from './Config/Navigation'
import {store} from "./Config/configureStore";
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {sendPushNotification} from "./Config/Notifications";

export default function App() {
    const requestUserPermission = async () => {
        try {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
            if (enabled) {
                console.log('Authorization status:', authStatus);
            }
        } catch (error) {
            console.error('Firebase Error:', error);
        }
    }
    useEffect(() => {

        //check quyền thông báo và lấy token
        if (requestUserPermission()) {
            messaging().getToken().then(token => console.log("token", token))
        } else {
            console.log("Failed token status")
        }
        //khởi tạo thông báo
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                }
            });
        // thông báo khi mở app
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });
        // thông báo khi app chạy nền
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });
        // thông báo từ FB
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log(remoteMessage.notification);
            await sendPushNotification(remoteMessage.notification);
        });
        return unsubscribe;
    }, []);


    return (
        <Provider store={store}>
                <Navigation/>
        </Provider>
    );
}
