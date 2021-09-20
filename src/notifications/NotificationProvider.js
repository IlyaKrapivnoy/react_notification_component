import React from 'react';
import { v4 } from 'uuid';

const NotificationProvider = (props) => {
    const notifications = [
        {
            id: v4(),
        },
    ];
    console.log(notifications);

    return <div>{props.children}</div>;
};

export default NotificationProvider;
