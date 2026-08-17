const express = require("express");
const aboutSchema = require("../models/About.js");
const router = express.Router();
const About = aboutSchema;
const multer = require('multer');
const upload = multer();

router.patch('/', upload.none(), async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate('singleton', req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(about);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update about info', details: err.message });
  }
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