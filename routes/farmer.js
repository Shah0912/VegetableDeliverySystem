const express = require('express');
const router = express.Router();
const pool = require("../db");


router.use(express.json());

//Dashboard
/* router.get('/',(req,res)=>{

}); */

//Cultivating
router.post('/growing',async (req,res)=>{
    try {
        const {farmerid,name,rate,type,farmage,farmsize,season} = req.body;
        console.log(req.body);
        
        // Check if farmer exists
        check = await pool.query("SELECT EXISTS(SELECT 1 FROM farmer where farmerid = $1 LIMIT 1);",[farmerid]);
        if(check.rows[0].exists)
        {
            console.log("farmer exists proceed");
            const newCrop = await pool.query("INSERT INTO crop (farmerid,name,rate,type,farmage,farmsize,season) values($1,$2,$3,$4,$5,$6,$7);",[farmerid,name,rate,type,farmage,farmsize,season]);
            console.log(newCrop.rows);
            res.json(newCrop);
        }
        else
        {
            console.log("Farmer doesnt exist in the database, Please register first");
            res.json({"Farmer": "false"});
        }

    } catch (error) {
        console.error(error.message)
    }

});


module.exports = router;