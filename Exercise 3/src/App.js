import './App.css';
import React from 'react';
import data from './data.json'
import TopBar from './components/TopBar';
import ShopDiv from './components/ShopDiv';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchString: "",
      records: data.records
    }
  }

  updateSearch = (event) => {
    console.log(this.props.searchString);
    console.log(event.target.value);
    this.setState({searchString: event.target.value});
}

  render() {
    return (
      <div className="App" >
        <TopBar searchString={this.state.searchString} updateSearch={this.updateSearch}></TopBar>
        <ShopDiv
          records={ this.state.records.filter((record) => (record.name.toLowerCase().includes(this.state.searchString)) || (record.band.toLowerCase().includes(this.state.searchString)))} />
        </div>
    );
  }
  
}

export default App;
