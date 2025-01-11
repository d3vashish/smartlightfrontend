import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const LightControl = () => {
    const dispatch = useDispatch();
    const lights = useSelector((state) => state);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3000'); 
        setSocket(newSocket);

        newSocket.on('statusUpdate', (updatedStatus) => {
            dispatch({ type: 'UPDATE_LIGHTS', payload: updatedStatus });
        });

        return () => newSocket.close(); 
    }, [dispatch]);

    const toggleLight = (room, light) => {
        const updatedStatus = {
            [room]: {
                ...lights[room],
                [light]: !lights[room][light],
            },
        };

        socket.emit('updateStatus', updatedStatus);
    };

    const toggleAll = (status) => {
        const updatedStatus = {
            bedroom: { light1: status, light2: status },
            kitchen: { light1: status, light2: status },
        };

        // Send the updated status to the server
        socket.emit('updateStatus', updatedStatus);
    };

    return (
        <div>
            <h1>Smart Light Control</h1>
            {['bedroom', 'kitchen'].map((room) => (
                <div key={room}>
                    <h2>{room.charAt(0).toUpperCase() + room.slice(1)}</h2>
                    {Object.keys(lights[room]).map((light) => (
                        <div key={light}>
                            <label>
                                {light}:
                                <input
                                    type="checkbox"
                                    checked={lights[room][light]}
                                    onChange={() => toggleLight(room, light)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={() => toggleAll(true)}>Turn All ON</button>
            <button onClick={() => toggleAll(false)}>Turn All OFF</button>
        </div>
    );
};

export default LightControl;
