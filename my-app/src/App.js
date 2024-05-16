import Product from "./component/ProductList";
import {Routes,Route, Link} from 'react-router-dom';
import { useState } from "react";
import product1 from './assets/productbangle1.jpg';
import product2 from './assets/productbangle2.jpg';
import product3 from './assets/productbangle3.jpg';
import product4 from './assets/productbangle4.jpg';
import Cart from "./component/cart";
import Navbar from "./component/Navnar";
import SucessUrl from "./component/sucessUrl";
import CancelUrl from "./component/cancelUrl";



function App({}) {
  const [product,setProduct] = useState([
    {
      id:1,
      name:' 22K wedding Wear',
      image:product1,
      price:10000,
    },
    {
      id:2,
      name:'bangle with stones',
      image:product2,
      price:10000,
    },
    {
      id:3,
      name:'Rubans 22K plated',
      image:product3,
      price:10000,
    },
    {
      id:4,
      name:'bangle heavywork',
      image:product4,
      price:10000,
    },
    
  ])

  const [cart,setCart] = useState([]);
  const[showCart,setShowCart] = useState(false)
  console.log(cart);

  const addToCart = (item) =>{
    
    setCart([...cart,{...item,quantity:1}])

  }
  
  const handleShow =(value)=> {
    setShowCart(value)
    
  }
 
    
return(
  <>
    <Routes>
      <Route path="/sucess" element={<SucessUrl/>}></Route>
      <Route path="/cancel" element={<CancelUrl/>}/>
    </Routes>
     
     <div>
      
      <Navbar count={cart.length}  handleShow={handleShow}></Navbar>

      {
        showCart ? 
        <Product  product = { product}addToCart={addToCart}></Product> :

        <Cart cart={cart}></Cart>
      }
     

    </div>
    </>
  )

}

export default App;