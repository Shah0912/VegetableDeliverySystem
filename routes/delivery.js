const express = require('express');
const router = express.Router();
const pool = require("../db");
router.use(express.json());



//Add Vehicle details route
router.post('/vehicle', async (req,res)=>{
    try {
        
        const {vehicle_no,licence_no,capacity,type} = req.body;
        //console.log(req.body);
        //console.log(vehicle_no,licence_no,type,capacity);
        check = await pool.query("SELECT EXISTS(SELECT 1 FROM vehicles where vehicleno = $1 OR licence_number = $2 LIMIT 1);",[vehicle_no,licence_no]);
        //console.log(check.rows);

        if(check.rows[0].exists == false)
        {
            newVehicle = await pool.query("INSERT INTO vehicles (vehicleno,licence_number,volume_capacity,type) values ($1,$2,$3,$4);",[vehicle_no,licence_no,capacity,type]);
            //console.log(newVehicle);
            res.json(newVehicle);
        }
        else{
            console.log("THE VEHICLE IS ALREADY REGISTERED");
            res.json(check);
        }
    
    } catch (error) {
        console.error(error.message)
    }
});


//Route for Pickup





module.exports = router;