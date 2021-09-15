import React from 'react'
import '../MainRow.css';
import './MainContainerNews.css'

export default function MainContainerNews(props) {
    return (
        <div className="MainContainerNews">
            <img style={{marginTop: '10px', width: '90%'}} src={props.kuva} alt="kuva"></img>
            <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', borderColor: 'grey', borderBottom: 'solid 1px', paddingBottom: '10px'}}>
            <span style={{fontSize: '30px', color: '#4196a4', fontFamily:'fantasy'}}>{props.otsikko}</span>
            <span style={{fontSize: '30px', fontFamily:'fantasy', }}>{props.teksti}</span>
            </div>
            <div className="MainRow" style={{width: '90%', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{paddingRight: '20px'}}>
            <span style={{fontSize: '20px', color: '#4196a4', fontFamily:'fantasy'}}>{props.otsikko}</span>
            <span style={{fontSize: '20px', fontFamily:'fantasy', }}>{props.teksti}</span>
            </div>
            <img style={{marginTop: '10px', width: '30%', height: '100px'}} src={props.kuva} alt="kuva"></img>
            </div>
        </div>
    )
}
