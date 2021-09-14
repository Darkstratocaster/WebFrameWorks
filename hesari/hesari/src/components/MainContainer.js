import React from 'react';
import '../MainRow.css';
import MainContainerNews from './MainContainerNews';

export default function MainContainer(props) {
    return (
        <div className="MainContainer" style={{width: '630px', height: '70%'}}>
            {props.paauutiset.map((element) => 
                <MainContainerNews otsikko={element.otsikko} teksti={element.teksti} kuva={element.kuva}/>
            )}
        </div>
    ) 
}
