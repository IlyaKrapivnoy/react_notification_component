import React, { useEffect, useState } from 'react';

const Notification = (props) => {
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5;
                }
                return prev;
            });
        }, 20);
        setIntervalID(id);
    };

    const handlePauseTimer = () => {
        clearInterval(intervalID);
    };

    useEffect(() => {
        handleStartTimer();
    }, []);

    return (
        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`notification-item ${
                props.type === 'SUCCESS' ? 'success' : 'error'
            } `}
        >
            <p>{props.message}</p>
            <div className='bar' style={{ width: `${width}%` }}></div>
        </div>
    );
};

export default Notification;
