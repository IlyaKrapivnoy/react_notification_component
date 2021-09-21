import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import Notification from './Notification';

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'ADD_NOTIFICATION':
                    return [...state, { ...action.payload }];
                case 'REMOVE_NOTIFICATION':
                    return state.filter((el) => el.id !== action.id);
                default:
                    return state;
            }
        },
        [
            {
                id: v4(),
                type: 'SUCCESS',
                message: 'Hell yeah!',
            },
            {
                id: v4(),
                type: 'SUCCESS',
                message: 'Hell yeah 2!',
            },
        ]
    );

    // dispatch({
    //     type: 'ADD_NOTIFICATION',
    //     payload: {
    //         id: v4(),
    //         type: 'SUCCESS',
    //         message: 'new notification!',
    //     },
    // });

    return (
        <div>
            <div className='notification-wrapper'>
                {state.map((note) => {
                    return (
                        <Notification
                            dispatch={dispatch}
                            key={note.id}
                            {...note}
                        />
                    );
                })}
            </div>
            {props.children}
        </div>
    );
};

export default NotificationProvider;
