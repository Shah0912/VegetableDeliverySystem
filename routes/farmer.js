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
        const {farmerid,name,rate,type,farmage,farmsize} = req.body;
        //console.log(req.body);
        //console.log(farmerid);
        const check = await pool.query("SELECT EXISTS(SELECT 1 FROM farmer where farmerid = $1 LIMIT 1);",[farmerid]);
    
        console.log(check.rows[0].exists);
        //if(check.rows[0].exists)
        {

        }
        //else
        {
            console.log("Farmer doesnt exist in the database, Please register first");
        }

    } catch (error) {
        console.error(error.message)
    }

});


module.exports = router;