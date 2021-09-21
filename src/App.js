import { useContext, useEffect } from 'react';
import './App.css';
import { NotificationContext } from './notifications/NotificationProvider';
import { v4 } from 'uuid';

function App() {
    const dispatch = useContext(NotificationContext);

    useEffect(() => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: v4(),
                type: 'SUCCESS',
                message: 'Hello, I am a new notification!',
            },
        });
    });

    console.log('contextValue', dispatch);
    return <div className=''></div>;
}

export default App;
