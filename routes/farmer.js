const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

//Dashboard
/* router.get('/',(req,res)=>{

}); */

//Cultivating
router.get("/", async (req, res) => {
  try {
    //console.log(req.body);
    const { farmerid } = req.body;
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
        "INSERT INTO crop (farmerid,name,rate,type,farmage,farmsize,season) values($1,$2,$3,$4,$5,$6,$7);",
        [farmerid, name, rate, type, farmage, farmsize, season]
      );
      console.log(newCrop.rows);
      res.json(newCrop);
    } else {
      console.log("Farmer doesnt exist in the database, Please register first");
      res.json({ Farmer: "false" });
    }
  } catch (error) {
    console.error(error.message);
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
        "UPDATE crop SET completed = 1 WHERE farmerid = $1 AND cropid = $2",
        [farmerid, cropid]
      );
      console.log(update.rows);
      res.json(update);
    } else {
      console.log("Crop or farmer doesn't exist OR crop already cultivated");
      res.json({ exists: "false" });
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
