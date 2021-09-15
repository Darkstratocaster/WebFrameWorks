import React from 'react';
import SideContainerNews from './SideContainerNews';
import '../MainRow.css';



export default function SideContainerFull(props) {
    console.log(props.uutiset);
    console.log(typeof props);
    return (
        <div className="SideContainerFull"  style={{ backgroundColor: 'white', marginTop: '25px', width: '100%', marginLeft: '20px', height: '70%' }}>

            <h2 style={{fontSize:'30px', fontFamily:'fantasy', float: 'left', marginLeft: '10px',  marginTop: '10px', display: 'flex'}}>
                {props.otsikko}
            </h2>
            <div style={{borderBottom: 'solid 1px', borderColor: 'black', paddingBottom: '20px', width: '95%', marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}></div>

            {props.uutiset.map((element, index) => 
            <div className="Uutinen">
                <span className="Numero" style={{fontSize:'25px', fontFamily:'fantasy', color:'#4196a4', marginTop: '10px', float: 'left', marginLeft: '10px', display: 'flex'}}>{index + 1}</span>
                <SideContainerNews kategoria={element.kategoria} sisalto={element.sisalto} /> </div>
            )}    
            
        </div>
    ) 
}
