import React from 'react';
import './SideContainerNews.css'

export default function SideContainerNews(props) {
    return (
        <div className="MainRow" style={{width: '90%', height: '10%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '10px', paddingleft: '10px'}}>

                <span style={{fontSize:'18px', fontFamily:'fantasy', marginTop: '15px', float: 'left', marginLeft: '10px', borderColor: 'grey', borderBottom: 'solid 1px'}}>
                    {props.kategoria}{props.sisalto}
                </span>   
                
                </div>
    )
}
