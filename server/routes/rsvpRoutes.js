const express = require("express");
const RSVP = require("../models/Guest");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const guest = await RSVP.findOne({ name });
    if (guest) {
      return res.status(400).json({ message: "Guest already confirmed" });
    }

    const newRSVP = new RSVP({ name });
    await newRSVP.save();
    
    res.status(201).json({ guest: newRSVP });
  } catch (error) {
    console.error("Error confirming RSVP:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;