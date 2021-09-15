import React from 'react';
import './TopBarButton.css';

export default function TopBarButton(props) {
    return (
        <span className="TopBarButton">
            {props.nappiteksti}
        </span>
    )
}
