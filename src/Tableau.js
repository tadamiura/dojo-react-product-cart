import React,{useState} from 'react'

const Tableau = (props) => {
  const [productList, setProductList] = useState(props.initialProductList)
    //   [
    //       { id: 1, name: 'produit 1', price: 50, quantity: 1 },
    //       { id: 2, name: 'produit 2', price: 75, quantity: 2 },
    //       { id: 3, name: 'produit 3', price: 20, quantity: 5 }
    //   ]
  

  const handleChange = (e) => {
    const localProducts = [...productList]
    const id = parseInt(e.target.id)
    localProducts.forEach(item =>{
      if(item.id === id){
        item.quantity = parseInt(e.target.value)
      }
    })
    setProductList(localProducts)
  }

  const prixTotal = () => {
    const localProducts = [...productList]
    localProducts.reduce((a, b) =>a + b
      
    )
  }
  const op = (a,b) => a * b

  getTotal() {
    const total = productList.reduce((acc, product) => acc + (product.quantity * product.price), 0)
    return total
  }

  



  // const bill = initialProductList.reduce(function(sum, order){
  //   return sum + order.{item.price * item.quantity}
  // },0)
  
  return (
        <div>
          < table >
            <tr>
                <th>Produit</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Prix total</th>
            </tr>
            {productList.map(item =>              
              <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                <td><input type="number" min="0" id={item.id} onChange={(e)=>handleChange(e)}  value={item.quantity}/></td>
                <td>{item.price * item.quantity}</td>
              </tr>
              )              
            }
          </table>
          <p>Montant total: {getTotal}
            {/* {bill} */}
            {/* {productList.reduce(function(a,b){
              return (a.quantity * a.quantity)
          }
          )}       */}
          </p> 
        </div>
    )
}

export default Tableau