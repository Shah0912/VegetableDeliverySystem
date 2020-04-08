const express = require('express');
const path = require('path');
const pool = require("./db");
const randomstring = require('randomstring');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let length = 20;

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
            length: length,
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



//REGISTRATION WITHOUT PHONE NUMBERS......
app.post('/reg',async (req,res)=>{
    try
    {
        console.log("Here");
        const name = req.body.name;
        const dob = req.body.dateofBirth;
        const street = req.body.street;
        const state = req.body.state;
        const locality = req.body.locality;
        const pin = req.body.pinCode;
        let p = req.body.password;
        

        let password = p.slice(0,p.length - 20);
        const h = bcrypt.hashSync(password, saltRounds);
        //console.log('THis is ',h);
        let newEntry;
        if(req.body.type == "F")
        newEntry = await pool.query("INSERT INTO farmer (name,date_of_birth,farmer_rating,street,state,locality,pincode,password) values ($1,$2,0,$3,$4,$5,$6,$7);",
        [name,dob,street,state,locality,pin,h]
        );
        else if(req.body.type == "C")
        newEntry = await pool.query("INSERT INTO customer (name,date_of_birth,farmer_rating,street,state,locality,pincode,password) values ($1,$2,0,$3,$4,$5,$6,$7);",
        [name,dob,street,state,locality,pin,h]
        );
        else
        newEntry = await pool.query("INSERT INTO delivery_person (name,date_of_birth,farmer_rating,street,state,locality,pincode,password) values ($1,$2,0,$3,$4,$5,$6,$7);",
        [name,dob,street,state,locality,pin,h]
        );
          
        res.json(newEntry);
    }   
    catch(error){
        console.error(error.message);
    }
});




/* app.get('/auth', (req,res)=>{

}); */



app.post('/auth', async (req,res)=>{
    try
    {
        const {id,password} = req.body;
        console.log(id);
        let hash;
        if(id[0]=="F")
        {
            hash = await pool.query("SELECT password FROM farmer WHERE farmerid = $1",[id]);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            const ans = bcrypt.compareSync(password, hash.rows[0].password);   
            if(ans)
            //Send to the dashboard
            {
                console.log("congratulations");
            }
            else  
            //ERROR
            {
                console.log("AUTHENTICATION FAILED");
            }  
                
        }
        else if(id[0] == "C")
        {
            hash = await pool.query("SELECT password FROM customer WHERE customerid = $1",[id]);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            const ans = bcrypt.compareSync(password, hash.rows[0].password);   
            if(ans)
            //Send to the dashboard
            {
                console.log("congratulations");
            }
            else  
            //ERROR
            {
                console.log("AUTHENTICATION FAILED");
            }
        }   
        else
        {
            hash = await pool.query("SELECT password FROM delivery_person WHERE DeliveryId = $1",[id]);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            const ans = bcrypt.compareSync(password, hash.rows[0].password);   
            if(ans)
            //Send to the dashboard
            {
                console.log("congratulations");
            }
            else  
            //ERROR
            {
                console.log("AUTHENTICATION FAILED");
            }
        }
    }
    catch(error){
        console.error(error.message)
    }

});


app.post('/feedback',async (req,res)=>{
    try {
        const {reviewee,friedliness,knowledge,efficiency,quality,comment} = req.body;
        console.log(req.body);
        
    } catch (error) {
        console.error(error.message);
    }
});






app.listen(PORT,() =>{
    console.log(`Server Started on port: ${PORT}`);
    //console.log(randomGen());
    
});