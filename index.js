const express = require('express');
const path = require('path');
const pool = require("./db");


//const {Client} = require('pg');


/* const client = new Client({
    "user": "dbadmin",
    "password" : "admin",
    "host" : "localhost",
    "port" : 5432,
    "database" : "deliverySystem"
}) */
//client.connect();

const app = express();
const router = express.Router();


const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send()
});

app.listen(PORT,() =>{
    console.log(`Server Started on port: ${PORT}`);
    
});