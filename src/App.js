import { useContext } from 'react';
import './App.css';
import { NotificationContext } from './notifications/NotificationProvider';

function App() {
    const contextValue = useContext(NotificationContext);
    console.log('contextValue', contextValue);
    return <div className=''></div>;
}

export default App;
