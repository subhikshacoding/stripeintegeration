const express = require("express")
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PCcuBSFPRV42OM7glDiXMb4b341Q1V6UZHiezJtXcGsojVK6VRgxIRaxFIu12so4E6FCtIXpoxQ6IVKQnxQ7Fm500kKpzWMyI")


app.use(express.json());
app.use(cors())

//checkout integeration

app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} =req.body;

    const line_Items = products.map((product)=>({
        price_data:{
            currency:"inr",
         product_data:{
                name:product.name
            },
            unit_amount:product.price *100
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:line_Items,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel"
    });

    res.json({id:session.id})
})


app.listen(7000,()=>{
    console.log("server started");
})