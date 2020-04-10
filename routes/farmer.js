const express = require('express');
const router = express.Router();
const pool = require("./db");


//Dashboard
/* router.get('/',(req,res)=>{

}); */

//Cultivating
router.post('/growing',async (req,res)=>{
    //check if crop is present in the database
    // const {farmerid,cropid,}
    // const check = await pool.query("SELECT EXISTS(SELECT 1 FROM crops where farmerid = $1 AND cropid = $2)",[]);
});


module.exports = router;