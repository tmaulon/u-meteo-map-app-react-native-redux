import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

export const suscribeToPushNotifications = () => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(existingPermission => {
        if (existingPermission.status !== "granted") {
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(persmission => {
                if (persmission.status !== "granted") {
                    return;
                } else {
                    Notifications.getExpoPushTokenAsync().then(token => {
                        console.log('====================================');
                        console.log("token => ", token);
                        console.log('====================================');
                    });
                }
            });
        } else {
            Notifications.getExpoPushTokenAsync().then(token => {
                console.log('====================================');
                console.log("token => ", token);
                console.log('====================================');
            });
        }
    });
};