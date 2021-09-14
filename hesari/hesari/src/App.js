import TopBar from './components/TopBar';
import NewsMenu from './components/NewsMenu';
import BlueBox from './components/BlueBox';
import MainContainerObject from './components/MainContainerObject';
import SideContainerObject from './components/SideContainerObject';
import SideContainer from './components/SideContainer';
import './MainRow.css';
import './App.css';
//kuva="hesarisnippi.PNG" otsikko="Budjettiriihi" teksti="|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetet"
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#e9eaed;'}}>
      <TopBar></TopBar>
      <NewsMenu></NewsMenu>
      <BlueBox category="HS GALLUP:" text="Olli Rehn olisi sopivin presidentiksi"></BlueBox>
      <BlueBox category="PÄIVÄN TIMANTTI:" text="Erikoisartikkeli kertoo, mitä 11.9.2001 tapahtui ja miten se oli mahdollista"></BlueBox>
      <BlueBox category="MAINOS:" text="Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!"></BlueBox>
      <div className="MainRow" style={{marginLeft: 'auto'}}>

      <MainContainerObject></MainContainerObject>
      <SideContainer></SideContainer>
      
      </div>

    </div>
  );
}

export default App;
