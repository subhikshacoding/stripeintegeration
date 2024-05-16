import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart';
import './Productlist.css';

const Product = ({product,addToCart}) => {



  
    // const isInCart = item.some((cartItem) => cartItem.id === item.id);
    // if (isInCart) {
    //   alert('Item is already in the cart');
    // } else {
    //   setCart([...item, { ...item, quantity: 1 }]);
    // }
  
  

//  const addToCart =(item) =>{

//   const isInCart = cart.some((cart)=> cart.id === item.id)

//   if(isInCart){
//     alert('item is already in the cart')
//   }
//   else{
//     setCart([...cart,item])
//   }
//   console.log('Cart Items:', cart);

  
//  }
  return (
    <>
{/* 
<div className="cart">

        <div className='nav-cart-count'>
          <span></span>
          <Link to="/cart">
          <ShoppingCartOutlinedIcon  style={{width:'50px',height:'50px',float:'right', color:'black'}}/>
          </Link>

        </div>
      </div> */}


      <h1>Bangles Mela</h1>
      <div className="product-list" >
        {product.map((item, id) => (
          <div className='product-container' key={id}>
            <Link to={`/product/${item.id}`}>
            <img className="image-bangle" src={item.image} alt={item.name}  />
            </Link>
            <h2>{item.name}</h2>
            <h2 className='price'>Rs.{item.price}</h2>
            <button type='button' onClick={()=>addToCart(item)} > Add To Cart

            
            </button>

          </div>
        ))}
      </div>

    </>
  );
}

export default Product;
