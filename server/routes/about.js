const express = require("express");
const aboutSchema = require("../models/About.js");
const router = express.Router();

const About = aboutSchema;

router.patch('/', async (req, res) => {
  const about = await About.findByIdAndUpdate('singleton', req.body, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  res.json(about);
});
router.get('/', async (req, res)=>{
    try {
    const about = await About.findById('singleton');

    if (!about) {
      return res.status(404).json({ error: 'About info has not been set up yet' });
    }

    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about info', details: err.message });
  }
});

module.exports = router;