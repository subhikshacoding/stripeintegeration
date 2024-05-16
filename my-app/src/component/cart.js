import'./cart.css'
import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';



const Cart=({cart}) =>{
    const [CART,setCARt] =useState([]);
    console.log(cart);

    useEffect(()=>{
        setCARt(cart)
    },[cart])


    //payment integeration

        const makePayment =async() =>{
           
            const stripe =await loadStripe("pk_test_51PCcuBSFPRV42OM7Wh8NQFUPSyEkdTwJQ4Ede46IPE2nMWQCTaYeLIgjrdmwbAWlMrGEvnDVhH6GyPrKc5BtwMMr00zaswCDky")

            const body ={
                products :cart
            }
            const headers = {
                "Content-Type":"application/json"
            }
            const response = await fetch("http://localhost:7000/api/create-checkout-session",{
                method:"POST",
                headers:headers,
                body:JSON.stringify(body)
            });

            const session = await response.json();
            const result = stripe.redirectToCheckout({
                sessionId:session.id
            })

            if(result.error){
                console.log( result.error);
            }

        }


    return(
        <div>
            {
                CART?.map((cartitem,cartindex) => {
                    return(
                        <div className="cart-container" key={cartindex}>
                            <img src={cartitem.image} alt="item" width={100}></img>
                            <br/>
                            <span className='cartname'>{cartitem.name}</span>
                            <div className='num'>
                            <button className="button"
                            onClick={()=> {
                                const _CART = CART.map((item,id)=>{
                                    return cartindex  === id ? {...item,quantity:
                                        item.quantity > 0  ? item.quantity -1 : 0} 
                                        :item
                                })
                                setCARt(_CART)
                             }}
                                    
                            >-</button>
                            <span>{cartitem.quantity}</span>
                            <button  className="button" onClick={()=> {
                                    const _CART =  CART.map((item,index)=>{
                                        return cartindex  === index ? {...item,quantity:
                                            item.quantity +1}:
                                        item
                                    })
                                    setCARt(_CART)
                                 }}
                            >+</button>
                        </div>
                            <span className='cartname'> Rs.{cartitem.price *cartitem.quantity}</span>
                            </div>
                    )

                })
            }

            {/* <button   {
                    CART.map(item => item.price * item.quantity).reduce((total,value) => total+value,0)
                }>Proceed to pay :</button> */}

            <button className='pay '  onClick={makePayment}> Proceed To Pay : Rs.
                {
                    CART.map(item => item.price * item.quantity).reduce((total,value) => total+value,0)
                }
                
                /-
            </button>
        </div>
    )
}

export default Cart;