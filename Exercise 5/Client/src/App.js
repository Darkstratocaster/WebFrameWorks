import './App.css';
import React from 'react';
import data from './data.json'
import TopBar from './components/TopBar';
import ShopDiv from './components/ShopDiv';
import AdminView from './AdminView';
import axios from 'axios';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchString: "",
      records: [],
      adminModeActive: false
    }
  }

  componentDidMount() {
    console.log("Mounted")
    axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log(response);
        this.setState({records: response.data.records})
      })
      .catch(err => console.log(err));
  }


  updateSearch = (event) => {
    console.log(this.props.searchString);
    console.log(event.target.value);
    this.setState({searchString: event.target.value});
}


addNewRecord = (name, band, type, price, rating, image) => {
  axios.post('http://localhost:4000/products', {
    name: name,
    band: band,
    type: type,
    price: price,
    rating: rating,
    image: image
  })
  .then( (response) => {
    console.log(response.config.data);
    this.setState({records: response.data});
  })
  .catch(function (error) {
    console.log(error)
  });

}

deleteRecord = (recordId) => {
  axios.delete('http://localhost:4000/products/'+recordId,{
    id: recordId
  })
  .then(response => {
    console.log(response)
    this.setState({records: response.data})
  })
  .catch( (error) => {
    console.log(error)
  });
}


  render() {
    let output = 
    <div className="App" >
        <TopBar searchString={this.state.searchString} updateSearch={this.updateSearch}></TopBar>
        <ShopDiv
          records={ this.state.records.filter((record) => (record.name.toLowerCase().includes(this.state.searchString)) || (record.band.toLowerCase().includes(this.state.searchString)))} />
          <button styles={{paddingBottom: '50px'}}onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        </div>

if(this.state.adminModeActive) {
  output = <AdminView
              disableAdminMode={() => this.setState({adminModeActive: false}) }
              addNewRecord={ this.addNewRecord }
              records={ this.state.records }
              deleteRecord={ this.deleteRecord }
           />;
}    
    return (
      output
    );
  }
  
}

export default App;
