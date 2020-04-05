const express = require('express');
const path = require('path');
const pool = require("./db");
const randomstring = require('randomstring');
const cors = require('cors');


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


// While calling login page generate a few random bits and send them.
//Function to generate random bits
function randomGen()
{
    return randomstring.generate({
            length: 20,
            charset: '0123456789'
        });
}


//Add this function to login and register page too
function stringToHash(string) { 
                  
    var hash = 0; 
      
    if (string.length == 0) return hash; 
      
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
      
    return hash; 
}

const PORT = process.env.PORT || 5000;

app.use('/farmer',require('./routes/farmer'));
app.use('/delivery',require('./routes/delivery'));
app.use('/customer',require('./routes/customer'));

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send()
});


/* app.get('/reg', (req,res)=>{

}); */

app.post('/reg',(req,res)=>{

});

/* app.get('/auth', (req,res)=>{

}); */





app.listen(PORT,() =>{
    console.log(`Server Started on port: ${PORT}`);
    //console.log(randomGen());
    
});