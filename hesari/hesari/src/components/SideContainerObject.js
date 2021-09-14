import React from 'react'
import SideContainerFull from './SideContainerFull'
import '../MainRow.css';

/* <div className="MainRow" style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', borderColor: 'grey', borderBottom: 'solid 1px', paddingBottom: '10px'}}>
            
                <span style={{fontSize:'25px', fontFamily:'fantasy', color:'#4196a4', marginTop: '10px', float: 'left', marginLeft: '10px', display: 'flex'}}>
                    {props.numero}
                </span>

                <span style={{fontSize:'18px', fontFamily:'fantasy', marginTop: '15px', float: 'left', marginLeft: '10px', display: 'flex'}}>
                    {props.kategoria}{props.sisalto}
                </span>   
                
                </div>
                
                <SideContainer uutiset={uutiset} />*/

export default function SideContainerObject(props) {
    const uutiset = [
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu',
        },
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu'
        },
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu'
        },
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu'
        },
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu'
        },
        {
            kategoria: '11.9.2001| ',
            sisalto: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem sed diam non pro id elit. Ut enim ad minim veniam et dolore magna aliquet et dolore magna aliqu'
        }
    ]
    return (
            
            <SideContainerFull uutiset={uutiset} otsikko={props.otsikko}/>   
        
    )
}
