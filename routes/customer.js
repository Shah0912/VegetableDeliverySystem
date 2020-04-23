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

    console.log(req.body);

});

module.exports = router;