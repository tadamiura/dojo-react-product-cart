import React from 'react';
import './App.css';


const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

class App extends React.Component {
  state = {
    productList : initialProductList
  }

handleChange = (e) => {
  const productTmp = this.state.productList
  const index = productTmp.findIndex(item => item.id === parseInt(e.target.id))
  productTmp[index].quantity = parseInt(e.target.value)
  this.setState({productList: productTmp})
}

getTotal = () => {
  const total = this.state.productList.reduce((acc, product)=> acc + (product.quantity * product.price) ,0)
  return total
}

  render() {
  return (
    <div className='App'>
      <h1>Ma commande</h1>
      
      <table>
        <thead>
          <tr>
            <td>Produit</td>
            <td>Prix unitaire</td>
            <td>Quantité</td>
            <td>Prix total</td>
          </tr>
        </thead>

        <tbody>
          {this.state.productList.map( product => 
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><input 
                  id={product.id}
                  type='number'
                  value={product.quantity}
                  onChange={(e) => this.handleChange(e)}
                  /></td>
                  <td>{product.price * product.quantity}</td>
            </tr>)}
        </tbody>
      </table>
          <p>{`Le montant total de votre commande est de ${this.getTotal()}`}</p>

    </div>
    );
  }
}

export default App;
