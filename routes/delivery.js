const express = require('express');
const router = express.Router();
const pool = require("../db");
router.use(express.json());


//Show vehicle details
router.get('/vehicledetails', async (req,res)=>{
    try {
        const {deliveryid} = req.body;
        const vehicleid = await pool.query("SELECT vehicleid FROM delivery_person WHERE deliveryid = $1;",[deliveryid]);
        console.log(vehicleid);
    } catch (error) {
        console.error(error.message);
    }
});


//Add Vehicle details route
router.post('/vehicle', async (req,res)=>{
    try {
        
        const {vehicle_no,licence_no,capacity,type,deliveryid} = req.body;
        //console.log(req.body);
        //console.log(vehicle_no,licence_no,type,capacity);
        check = await pool.query("SELECT EXISTS(SELECT 1 FROM vehicles where vehicleno = $1 OR licence_number = $2 LIMIT 1);",[vehicle_no,licence_no]);
        //console.log(check.rows);

        if(check.rows[0].exists == false)
        {
            newVehicle = await pool.query("INSERT INTO vehicles (vehicleno,licence_number,volume_capacity,type) values ($1,$2,$3,$4) RETURNING vehicleid;",[vehicle_no,licence_no,capacity,type]);
            console.log(newVehicle.rows);

            const delivery = await pool.query("UPDATE delivery_person SET vehicleid = $1 WHERE deliveryid = $2;",[newVehicle.rows[0].vehicleid,deliveryid]);
            console.log(delivery);
            res.json(newVehicle);
        }
        else{
            console.log("THE VEHICLE IS ALREADY REGISTERED");
            res.json(check.rows[0]);
        }
    
    } catch (error) {
        console.error(error.message)
    }
});


//Route for Pickup





module.exports = router;