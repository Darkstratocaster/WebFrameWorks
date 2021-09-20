import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Maitoa', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    //this.addProduct = this.addProduct.bind(this);
  }
  


    /*setTimeout(() => {
      //this.state.items = [];

      this.setState({ items: [...this.state.items, {id: 5, value: "Olutta", qty: 5}]});
      //this.setState({ items: []});
    }, 2000)*/

    

    addProduct(nimi) {
      for(let a=0; a<this.state.items.length; a++) {
        if(this.state.items[a].value===nimi) {
          const productArray = [...this.state.items];
          var random = Math.floor(Math.random()*(10-1+1))+1;
          productArray[a].qty += random;
          return this.setState({items: productArray})
        } else {
          this.setState({ items: [...this.state.items, {id: (a+1), value: nimi, qty: 5}]});
        }
      }
    }
  

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button className="beerButton" style={{marginRight: '20px'}} onClick={() => this.addProduct("Olutta") }>Olutta!</button>
      <button className="milkButton" style={{marginRight: '20px'}} onClick={() => this.addProduct("Maitoa") }>Maitoa!</button>
      <button className="cheeseButton" style={{marginRight: '20px'}} onClick={() => this.addProduct("Juustoa") }>Juustoa!</button>
      <button className="bananaButton" style={{marginRight: '20px'}} onClick={() => this.addProduct("Banaania") }>Banaaneja!</button>
    </div>
  }
}


export default App;