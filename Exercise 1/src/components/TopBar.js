import React from 'react';
import './TopBar.css';
import Logo from './Logo';
import TopBarButton from './TopBarButton'
import kirjaudu from './kirjaudu.png';
import suurennuslasi from './suurennuslasi.png';
import valikko from './valikko.jpg';



export default function TopBar() {
    return (
        <div className="TopBar">
            <Logo logoteksti="Helsingin Sanomat"></Logo>
            <TopBarButton nappiteksti="Uutiset"></TopBarButton>
            <TopBarButton nappiteksti="Lehdet"></TopBarButton>

            <span  style={{marginLeft: '150px', display:'flex', text_color:'black', width:'100px', height:"30px", justifyContent:'center', alignItems:'center', backgroundColor:'white', color:'black', borderRadius:'15px'}}>Tilaa</span>

            <TopBarButton nappiteksti="Kirjaudu"></TopBarButton>

            <img style={{height: '25px', display:'flex', justifyContent:'center', alignItems:'center'}}src={kirjaudu} alt="kirjaudu" />

            <span  style={{marginLeft: '30px', justifyContent:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>Hae

            <img style={{height: '15px', display:'flex', justifyContent:'center', alignItems:'center', marginLeft: '5px'}}src={suurennuslasi} alt="suurennuslasi" /></span>

            <span  style={{marginLeft: '30px', justifyContent:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>Valikko

            <img style={{height: '15px', display:'flex', justifyContent:'center', alignItems:'center', marginLeft: '5px'}}src={valikko} alt="valikko" /></span>
        </div>
    )
}

//export {logoteksti};
