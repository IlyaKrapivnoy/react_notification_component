import { useContext } from 'react';
import './App.css';
import { NotificationContext } from './notifications/NotificationProvider';
import { v4 } from 'uuid';
import { useState } from 'react/cjs/react.development';

function App() {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useContext(NotificationContext);

    const handleNewNotification = () => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: v4(),
                type: 'SUCCESS',
                message: inputVal,
            },
        });
    };

    console.log('contextValue', dispatch);
    return (
        <div className=''>
            <input
                type='text'
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <button onClick={handleNewNotification}>Add Notification</button>
        </div>
    );
}

export default App;
