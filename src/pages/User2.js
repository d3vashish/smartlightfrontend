import React from 'react';
import Bedroom from '../components/Bedroom';
import Kitchen from '../components/Kitchen';
import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const User2 = () => {
    const dispatch = useDispatch();
    const lights = useSelector((state) => state);

    React.useEffect(() => {
        socket.on('statusUpdate', (updatedStatus) => {
            dispatch({ type: 'UPDATE_LIGHTS', payload: updatedStatus });
        });
    }, [dispatch]);
    const toggleAllLights = (status) => {
        const updatedStatus = {
            bedroom: { light1: status, light2: status },
            kitchen: { light1: status, light2: status },
        };
        socket.emit('updateStatus', updatedStatus);
    };

    const toggleLight = (room, light) => {
        const updatedStatus = {
            [room]: {
                ...lights[room],
                [light]: !lights[room][light],
            },
        };
        socket.emit('updateStatus', updatedStatus);
    };

    const toggleAll = (room, status) => {
        const updatedStatus = {
            [room]: { light1: status, light2: status },
        };
        socket.emit('updateStatus', updatedStatus);
    };

    return (
        <div className="user-container">
            <h1>User</h1>
            <div className="rooms-container">
                <Bedroom
                    className="room-box"
                    lights={lights.bedroom}
                    toggleLight={toggleLight}
                    toggleAll={toggleAll}
                />
                <Kitchen
                    className="room-box"
                    lights={lights.kitchen}
                    toggleLight={toggleLight}
                    toggleAll={toggleAll}
                />
            </div>
            <div className="footer-buttons">
                <button
                    className="all-on-btn"
                    onClick={() => toggleAllLights(true)}
                >
                    All ON
                </button>
                <button
                    className="all-off-btn"
                    onClick={() => toggleAllLights(false)}
                >
                    All OFF
                </button>
            </div>
        </div>

    );
};

export default User2;
