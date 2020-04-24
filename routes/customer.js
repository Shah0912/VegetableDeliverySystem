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
    try {
        const {customerid,cropid,farmerid,amount} = req.body;
        console.log(req.body);
        console.log("hello");
        const cexists = await pool.query(
            "SELECT EXISTS(SELECT 1 FROM cart WHERE customerid = $1);",
            [customerid]
        );
        console.log(cexists.rows[0]);
        if(cexists.rows[0].exists == false) {
            const addCart = await pool.query("INSERT INTO cart (customerid) VALUES ($1) RETURNING *",[customerid]);
        }
        //console.log(addCart.rows[0]);
        const update = await pool.query("SELECT EXISTS(SELECT 1 FROM temporder WHERE cropid = $1 AND farmerid = $2 LIMIT 1);",[cropid,farmerid]);
        console.log(update.rows[0].exists);
        if(update.rows[0].exists){
            const amt = await pool.query("SELECT amount FROM temporder WHERE cropid = $1 AND farmerid = $2;",[cropid,farmerid]);
            console.log(amt.rows[0].amount);
            const total = parseInt(amt.rows[0].amount) + parseInt(amount);
            console.log(total);
            const updatecart = await pool.query("UPDATE temporder SET amount = $1 WHERE cropid = $2 AND farmerid = $3 RETURNING *;", [total,cropid,farmerid]);
            // console.log(updatecart);
            res.json(updatecart.rows[0]);
        }
        else {
            const addToCart = await pool.query("INSERT INTO temporder (cropid, farmerid, customerid, amount) values ($1,$2,$3,$4) RETURNING *;",[cropid,farmerid,customerid,amount]);
            res.json(addToCart.rows[0]);
        }
        //This is only if crop id and farmerid don't already exist.
        //const addToCart = await pool.query("INSERT INTO temporder (cropid, farmerid, customerid, amount) values ($1,$2,$3,$4);",[cropid,farmerid,customerid,amount]);
        
        //console.log(addToCart);
        //res.json(addToCart.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
        

});
//FOR CARTS
/*
    *First the order will be stored in a cart : cart and temporder
    *WHen customer checks out the cart the customer is deleted from temporder and cart
    *AND IT is added as an order: orders and ordered tables 
*/



module.exports = router;