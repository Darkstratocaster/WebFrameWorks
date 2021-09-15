import React from 'react';
import './BlueBox.css';

export default function BlueBox(props) {
    return (
        <div className="BlueBox">
            <span>{props.category}</span>
            <span style={{fontSize:'15px', marginLeft:'30px', fontFamily:'arial'}}>{props.text}</span>
        </div>
    )
}
