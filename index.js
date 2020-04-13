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
        newEntry = await pool.query("INSERT INTO farmer (name,date_of_birth,farmer_rating,nor,street,state,locality,pincode,password) values ($1,$2,0,0,$3,$4,$5,$6,$7);",
        [name,dob,street,state,locality,pin,h]
        );
        else if(req.body.type == "C")
        newEntry = await pool.query("INSERT INTO customer (name,date_of_birth,customer_rating,nor,street,state,locality,pincode,password) values ($1,$2,0,0,$3,$4,$5,$6,$7);",
        [name,dob,street,state,locality,pin,h]
        );
        else
        newEntry = await pool.query("INSERT INTO delivery_person (name,date_of_birth,delivery_person_rating,nor,street,state,locality,pincode,password) values ($1,$2,0,0,$3,$4,$5,$6,$7);",
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
        console.log(password);
        let hash;
        if(id[0]=="F")
        {
            hash = await pool.query("SELECT password FROM farmer WHERE farmerid = $1",[id]);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            let ans;
            //console.log(hash.rows[0]);
            if(hash.rows[0])
            {
                ans = bcrypt.compareSync(password, hash.rows[0].password);
            }    
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
            res.json(ans);
                
        }
        else if(id[0] == "C")
        {
            hash = await pool.query("SELECT password FROM customer WHERE customerid = $1",[id]);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            let ans;
            //console.log(hash.rows[0]);
            if(hash.rows[0])
            {
                ans = bcrypt.compareSync(password, hash.rows[0].password);
            }     
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
            res.json(ans);
        }   
        else
        {
            console.log(req.body);
            hash = await pool.query("SELECT password FROM delivery_person WHERE DeliveryId = $1",[id]);
            console.log(hash.rows);
            //console.log(hash.rows[0].password);     
            //console.log('hash', typeof(hash));
            //console.log('password', typeof(password));
            let ans;
            //console.log(hash.rows[0]);
            if(hash.rows[0])
            {
                ans = bcrypt.compareSync(password, hash.rows[0].password);
            }   
            console.log(ans);
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
            res.json(ans);
        }
    }
    catch(error){
        console.error(error.message)
    }

});


app.post('/feedback',async (req,res)=>{
    try {
        const {reviewer,reviewee,friendliness,knowledge,efficiency,quality,comment} = req.body;
        //console.log(req.body);
        if(reviewer[0] == reviewee[0])
        {
            console.log("ERROR: Cant review person with same occupation");
            res.json("false");
        }
        else
        {
            if(reviewee[0] == "F")
            {
                const check = await pool.query("SELECT EXISTS(SELECT 1 FROM farmer WHERE farmerid = $1 LIMIT 1);",[reviewee]);
                //console.log(check.rows[0].exists);        
                if(check.rows[0].exists)
                {
                    const value = (parseFloat(friendliness) + parseFloat(knowledge) + parseFloat(efficiency) + parseFloat(quality))/4;
                    console.log(value);
                    const prerating = await pool.query("SELECT farmer_rating,nor FROM farmer WHERE farmerid = $1",[reviewee]);
                    console.log(prerating.rows[0]);
                    const newrating = (parseFloat(prerating.rows[0].farmer_rating)*prerating.rows[0].nor + value)/(prerating.rows[0].nor + 1);
                    console.log(newrating);
                    const feedback = await pool.query("UPDATE farmer SET farmer_rating = $1, nor = $2 WHERE farmerid = $3",[newrating,prerating.rows[0].nor+1,reviewee]);
                    console.log(feedback);
                    res.json(feedback);
                }
                else
                {
                    console.log("user doesnt exist");
                }
            }
            else if(reviewee[0] == "C")
            {
                const check = await pool.query("SELECT EXISTS(SELECT 1 FROM customer WHERE customerid = $1 LIMIT 1);",[reviewee]);
                //console.log(check.rows[0].exists);        
                if(check.rows[0].exists)
                {
                    const value = (parseFloat(friendliness) + parseFloat(knowledge) + parseFloat(efficiency) + parseFloat(quality))/4;
                    console.log(value);
                    const prerating = await pool.query("SELECT customer_rating,nor FROM customer WHERE customerid = $1",[reviewee]);
                    console.log(prerating.rows[0]);
                    const newrating = (parseFloat(prerating.rows[0].customer_rating)*prerating.rows[0].nor + value)/(prerating.rows[0].nor + 1);
                    console.log(newrating);
                    const feedback = await pool.query("UPDATE customer SET customer_rating = $1, nor = $2 WHERE customerid = $3",[newrating,prerating.rows[0].nor+1,reviewee]);
                    console.log(feedback);
                    res.json(feedback);
                }
                else
                {
                    console.log("user doesnt exist");
                }
            }
            else if(reviewee[0] == "D")
            {
                const check = await pool.query("SELECT EXISTS(SELECT 1 FROM delivery_person WHERE deliveryid = $1 LIMIT 1);",[reviewee]);
                //console.log(check.rows[0].exists);        
                if(check.rows[0].exists)
                {
                    const value = (parseFloat(friendliness) + parseFloat(knowledge) + parseFloat(efficiency) + parseFloat(quality))/4;
                    console.log(value);
                    const prerating = await pool.query("SELECT delivery_person_rating,nor FROM delivery_person WHERE deliveryid = $1",[reviewee]);
                    console.log(prerating.rows[0]);
                    const newrating = (parseFloat(prerating.rows[0].delivery_person_rating)*prerating.rows[0].nor + value)/(prerating.rows[0].nor + 1);
                    console.log(newrating);
                    const feedback = await pool.query("UPDATE delivery_person SET delivery_person_rating = $1, nor = $2 WHERE deliveryid = $3",[newrating,prerating.rows[0].nor+1,reviewee]);
                    console.log(feedback);
                    res.json(feedback);
                }
                else
                {
                    console.log("user doesnt exist");
                }
            }
        }
    } catch (error) {
        console.error(error.message);
    }
});






app.listen(PORT,() =>{
    console.log(`Server Started on port: ${PORT}`);
    //console.log(randomGen());
    
});