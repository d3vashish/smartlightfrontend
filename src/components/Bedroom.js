import React from 'react';
import MyButton from './MyButton';
import "./Bedroom.css"
const Bedroom = ({ lights, toggleLight, toggleAll }) => {
    return (
        <div className="room-box">
            <h2>Bedroom</h2>
            <div className="light-control">
                <span>Light 1</span>
                <input
                    type="checkbox"
                    checked={lights.light1}
                    onChange={() => toggleLight('bedroom', 'light1')}
                    className="slider-toggle"

                />
            </div>
            <div className="light-control">
                <span>Light 2</span>
                <input
                    type="checkbox"
                    checked={lights.light2}
                    onChange={() => toggleLight('bedroom', 'light2')}
                    className="slider-toggle"
                />
            </div>
            <div className="room-buttons">
                <MyButton onClick={() => toggleAll('bedroom', true)}>Both ON</MyButton>
                <MyButton onClick={() => toggleAll('bedroom', false)}>Both OFF</MyButton>
            </div>
        </div>
    );
};

export default Bedroom;
