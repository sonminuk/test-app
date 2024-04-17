import React, { useState, useEffect } from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

function NotificationList() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                setNotifications(notifications.concat(reservedNotifications[index]));
            } else {
                // setNotifications([]);
                // clearInterval(timer);
                //이부분을 주석처리하면 자동 리프레쉬가 안됨
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [notifications]);

    return (
        <div>
            {notifications.map((notification) => (
                <Notification
                    key={notification.id}
                    id={notification.id}
                    message={notification.message}
                />
            ))}
        </div>
    );
}

export default NotificationList;
