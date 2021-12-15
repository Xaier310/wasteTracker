const router = require("express").Router();
const Volunteer = require("../models/Volunteer");
const Pin = require("../models/Pin");
const { VolSchema } = require("../models/Volunteer");
//create a volunteer
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let allCheckInVol= await Volunteer.findOne({$and:[{pinId:req.body.pin_id},{username:req.body.username}]});
    if(allCheckInVol){
      await Volunteer.deleteOne({$and:[{pinId:req.body.pin_id},{username:req.body.username}]});
          res.status(200).json("You are not volunteer now");
          console.log("You are not volunteer now");
    }

    else{
      let user = await Volunteer.findOne({username:req.body.username});
      const newVol = new Volunteer({
        username:req.body.username,
        pinId:req.body.pin_id,
        email:user.email
      });
      Pin.updateOne(
        { _id: req.body.pin_id },
        { $inc: { volunteers: 1 },$set:{pinId:req.body.pin_id} },
        async function (err, results) {
          try{
            const savedVol = await newVol.save();
            res.status(200).json("Volunteer added successfully");
            console.log("Volunteer added successfully");
            }
            catch (err) {
              res.status(500).json(err);
              console.log(err);
            }
          }
      );
    }
    }
     catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

//get all volunteers
router.get("/", async (req, res) => {
  try {
    const pins = await Volunteer.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
