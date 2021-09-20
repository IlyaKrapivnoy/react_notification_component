import React from 'react';

const Notification = (props) => {
    return (
        <div
            className={`notification-item ${
                props.type === 'SUCCESS' ? 'success' : 'error'
            } `}
        >
            <p>{props.message}</p>
            <div className='bar'></div>
        </div>
    );
};

export default Notification;
