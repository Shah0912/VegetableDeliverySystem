const express = require("express");
const router = express.Router();
const pool = require("../db");
const axios = require("axios").default;

router.use(express.json());

//Dashboard
/* router.get('/',(req,res)=>{

}); */

//Cultivating
router.get("/", async (req, res) => {
  try {
    //console.log(req.body);
    const { farmerid } = req.query;
    const cultCrops = await pool.query(
      "SELECT * FROM crop WHERE farmerid = $1 AND completed = 0;",
      [farmerid]
    );
    const compCrops = await pool.query(
      "SELECT * FROM crop WHERE farmerid = $1 AND completed = 1;",
      [farmerid]
    );
    //console.log(cultCrops.rows);
    //console.log(compCrops.rows);

    //Need to add orders

    res.json({ cultCrops: cultCrops.rows, compCrops: compCrops.rows });
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.post("/growing", async (req, res) => {
  try {
    const { farmerid, name, rate, type, farmage, farmsize, season } = req.body;
    console.log(req.body);

    // Check if farmer exists
    check = await pool.query(
      "SELECT EXISTS(SELECT 1 FROM farmer where farmerid = $1 LIMIT 1);",
      [farmerid]
    );
    if (check.rows[0].exists) {
      console.log("farmer exists proceed");
      const newCrop = await pool.query(
        "INSERT INTO crop (farmerid,name,rate,type,farmage,farmsize,season) values($1,$2,$3,$4,$5,$6,$7) RETURNING *;",
        [farmerid, name, rate, type, farmage, farmsize, season]
      );
      console.log(newCrop.rows);
      res.json(newCrop.rows[0]);
    } else {
      console.log("Farmer doesnt exist in the database, Please register first");
      res.json({ Farmer: "false" });
    }
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

//MOVE TO STORAGE
router.put("/cropstore", async (req, res) => {
  try {
    const { farmerid, cropid } = req.body;
    //CHECK IF CROP exists
    const check = await pool.query(
      "SELECT exists(SELECT 1 FROM crop c where c.farmerid = $1 AND c.cropid = $2 AND c.completed = 0)",
      [farmerid, cropid]
    );
    console.log(check.rows[0]);
    if (check.rows[0].exists) {
      const update = await pool.query(
        "UPDATE crop SET completed = 1 WHERE farmerid = $1 AND cropid = $2 RETURNING *",
        [farmerid, cropid]
      );
      console.log(update.rows);
      res.json(update.rows);
    } else {
      console.log("Crop or farmer doesn't exist OR crop already cultivated");
      res.json({ exists: "false" });
    }
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.post("/storage", async (req, res) => {
  try {
    const { farmerid, capacity, street, state, pincode, locality } = req.body;
    let url =
      "https://us1.locationiq.com/v1/search.php?key=b63d71d9d444f7&q=" +
      street.split(" ").join("%20") +
      ",%20" +
      locality.split(" ").join("%20") +
      ",%20" +
      state.split(" ").join("%20") +
      ",%20" +
      "India&format=json";
    console.log(url);
    const location = await axios
      .get(url)
      .then((res) => {
        //console.log(res.data[0].lat);
        //console.log(res.data[0].lon);
        return res.data[0];
      })
      .catch((error) => {
        console.error(error.message);
      });
    const lat = location.lat;
    const lon = location.lon;
    const storage = await pool.query(
      "INSERT INTO storage (farmerid,capacity,street,state,pincode,locality, latitude,longitude) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
      [farmerid, capacity, street, state, pincode, locality, lat, lon]
    );
    console.log(storage);
    res.json(storage.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

//Crops in storage
router.get("/cropstored", async (req, res) => {
  try {
    console.log(req.body);
    const { farmerid } = req.body;
    storedcrop = await pool.query(
      "SELECT * from crop WHERE farmerid = $1 AND completed = 1;",
      [farmerid]
    );
    res.json(storedcrop.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.get("/orders", async (req, res) => {
  try {
    const { farmerid } = req.query;
    const orders = await pool.query(
      "SELECT * from ordered WHERE farmerid = $1 AND orderid IN (SELECT orderid FROM orders WHERE status = 0);",
      [farmerid]
    );
    for (i in orders.rows) {
      const deliveryid = await pool.query(
        "SELECT deliveryid FROM orders WHERE orderid = $1 ;",
        [orders.rows[i].orderid]
      );
      const deliveryPerson = await pool.query(
        "SELECT * from delivery_person WHERE deliveryid = $1;",
        [deliveryid.rows[0].deliveryid]
      );
      //console.log(deliveryPerson.rows);
      //console.log(deliveryPerson.rows[0].deliveryid);
      // console.log(deliveryPerson.deliveryid);
      orders.rows[i].deliveryid = deliveryPerson.rows[0].deliveryid;
      orders.rows[i].deliveryPersonName = deliveryPerson.rows[0].name;
    }

    console.log(orders.rows);
    res.json(orders.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.put("/ordercomplete", async (req, res) => {
  try {
    const { orderid } = req.body;
    const order = await pool.query(
      "UPDATE orders SET status = 1 WHERE orderid = $1 RETURNING *",
      [orderid]
    );
    console.log(order.rows);
    res.json(order.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

//ALL THE CROPS both growing and cultivated
router.get("/allcrops", async (req,res)=>{
  try {
    const allcrops = await pool.query(
      "SELECT crop.name,farmer.latitude,farmer.longitude,crop.farmsize FROM crop,farmer WHERE crop.farmerid = farmer.farmerid;"
    )
    console.log(allcrops.rows);
    res.json(allcrops.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.get("/allgrowing", async (req,res)=>{
  try {
    const allgrowing = await pool.query(
      "SELECT crop.name,farmer.latitude,farmer.longitude,crop.farmsize FROM crop,farmer WHERE crop.farmerid = farmer.farmerid AND crop.completed = 0;"
    )
    console.log(allgrowing.rows);
    res.json(allgrowing.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});

router.get("/allcultivated", async (req,res)=>{
  try {
    const allcultivated = await pool.query(
      "SELECT crop.name,farmer.latitude,farmer.longitude,crop.farmsize FROM crop,farmer WHERE crop.farmerid = farmer.farmerid AND crop.completed = 1;"
    )
    console.log(allcultivated.rows);
    res.json(allcultivated.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
});


module.exports = router;
