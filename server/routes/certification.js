const express = require('express');
const certSchema = require('../models/Certification.js');
const router = express.Router();

const Certification = certSchema;

router.post("/", async (req, res) => {
  try {
    const { certName, year, desc } = req.body;
    const cert = await Certification.create({ certName, year, desc });
    res.status(201).json(cert);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const cert = await Certification.find();
    res.status(200).json(cert);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.put("/:id", async (req, res) => {
  const { certName, year, desc } = req.body;
  const newCert = await Certification.findByIdAndUpdate(
    req.params.id,
    { certName, year, desc },
    { new: true },
  );
  res.status(200).json(newCert);
});
router.delete("/:id", async(req, res)=>{
    const cert = await Certification.findByIdAndDelete(req.params.id);
    res.status(200).json(cert);
});
module.exports = router;
