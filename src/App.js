import { useContext, useEffect } from 'react';
import './App.css';
import { NotificationContext } from './notifications/NotificationProvider';
import { v4 } from 'uuid';
import { useState } from 'react/cjs/react.development';

function App() {
    const [inputVal, setInputVal] = useState('');
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
    return (
        <div className=''>
            <input
                type='text'
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
        </div>
    );
}

export default App;
