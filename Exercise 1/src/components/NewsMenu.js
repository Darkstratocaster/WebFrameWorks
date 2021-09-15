import React from 'react';
import NewsMenuButton from './NewsMenuButton'
import './NewsMenu.css';

export default function NewsMenu() {
    return (
        <div className="NewsMenu">
            <NewsMenuButton MenuButtonText="Etusivu"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="HS Visio"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Luetuimmat"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Uusimmat"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Politiikka"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Kaupunki"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Kulttuuri"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Tiede"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Hyvinvointi"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Ruoka"></NewsMenuButton>
            <NewsMenuButton MenuButtonText="Nyt"></NewsMenuButton>
        </div>
    )
}
