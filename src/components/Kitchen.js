import React from 'react';
import MyButton from './MyButton';  
import "./Bedroom.css"
const Kitchen = ({ lights, toggleLight, toggleAll }) => {
    return (
        <div className="room-box">
            <h2>Kitchen</h2>
            <div className="light-control">
                <span>Light 1</span>
                <input
                    type="checkbox"
                    checked={lights.light1}
                    onChange={() => toggleLight('kitchen', 'light1')}
                    className="slider-toggle"

                />
            </div>
            <div className="light-control">
                <span>Light 2</span>
                <input
                    type="checkbox"
                    checked={lights.light2}
                    onChange={() => toggleLight('kitchen', 'light2')}
                    className="slider-toggle"

                />
            </div>
            <div className="room-buttons">
                <MyButton onClick={() => toggleAll('kitchen', true)}>Both ON</MyButton>
                <MyButton onClick={() => toggleAll('kitchen', false)}>Both OFF</MyButton>
            </div>
        </div>
    );
};

export default Kitchen;
