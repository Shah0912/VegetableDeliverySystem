const express = require('express');
const router = express.Router();
const pool = require("../db");


router.use(express.json());


//GET REQUEST FOR ALL THE CROPS THAT ARE LISTED
router.get('/',async(req,res)=>{
    const Allcrops = await pool.query("SELECT * FROM crop WHERE completed = 1;");
    console.log(Allcrops.rows);   
    res.json(Allcrops); 
});

//ADD TO CART
router.post('/addtocart', async (req,res)=>{

    //IF customer doesnt exist in the cart CREATE the customer's cart
    //WHEN add to cart happens add the crop id in the temp order
        //if the crop id exists update the amount
        //else add new crop id
    
    console.log(req.body);

});
//FOR CARTS
/*
    *First the order will be stored in a cart : cart and temporder
    *WHen customer checks out the cart the customer is deleted from temporder and cart
    *AND IT is added as an order: orders and ordered tables 
*/



module.exports = router;