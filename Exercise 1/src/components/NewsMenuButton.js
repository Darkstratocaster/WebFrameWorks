import React from 'react';
import './NewsMenuButton.css';

export default function NewsMenuButton(props) {
    return (
        <span className="NewsMenuButton">
            {props.MenuButtonText}
        </span>
    )
}
