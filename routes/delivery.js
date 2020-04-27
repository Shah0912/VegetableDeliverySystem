const express = require('express');
const router = express.Router();
const pool = require("../db");
router.use(express.json());


//Show vehicle details
router.get('/vehicledetails', async (req,res)=>{
    try {
        const {deliveryid} = req.body;
        const check = await pool.query("SELECT EXISTS (SELECT 1 FROM delivery_person WHERE deliveryid = $1);",[deliveryid]);
        if(check.rows[0].exists) {

            const vehicleid = await pool.query("SELECT vehicleid FROM delivery_person WHERE deliveryid = $1;",[deliveryid]);
            if(vehicleid.rows[0].vehicleid)
                console.log(vehicleid.rows[0]);
                const vehicle = await pool.query("SELECT * FROM vehicles WHERE vehicleid = $1;",[vehicleid.rows[0].vehicleid]);
                // console.log(vehicle.rows[0]);
                res.json(vehicle.rows[0]);
        } else {
            res.json("Delivery Person doesnt exist");
        }
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
            res.json(newVehicle.rows[0]);
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

router.get('/pickup', async (req,res)=>{
    try {
        const {deliveryid} = req.body;
        const orders = await pool.query("SELECT * from orders WHERE deliveryid = $1",[deliveryid]);
        console.log(orders.rows);
        var crops = {};
        for(i in orders.rows) {
            console.log("hello");
            const ordered = await pool.query("SELECT * from ordered where orderid = $1", [orders.rows[i].orderid]);
            console.log(ordered.rows);
        }
    } catch (error) {
        console.error(error.message);
    }
});



module.exports = router;