import React from 'react'
import MainContainer from './MainContainer';

export default function MainContainerObject() {
    const paauutiset = [
        {
            otsikko: 'Budjettiriihi| ',
            teksti: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu',
            kuva: 'hesarisnippi.PNG'
        },
        {
            otsikko: 'Budjettiriihi| ',
            teksti: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu',
            kuva: 'hesarisnippi.PNG'
        },
        {
            otsikko: 'Budjettiriihi| ',
            teksti: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu',
            kuva: 'hesarisnippi.PNG'
        },

    ]
    return (
            
            <MainContainer paauutiset={paauutiset} />   
        
    )
}
