const express = require("express");
const educationSchema = require("../models/Education.js");
const router = express.Router();

const Education = educationSchema;

router.post("/", async (req, res) => {
  try {
    const { degree, school, date, desc } = req.body;
    const edu = await Education.create({ degree, school, date, desc });
    res.status(201).json(edu);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const edu = await Education.find();
    res.status(200).json(edu);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.put("/:id", async (req, res) => {
  const { degree, school, date, desc } = req.body;
  const newEdu = await Education.findByIdAndUpdate(
    req.params.id,
    { degree, school, date, desc },
    { new: true },
  );
  res.status(200).json(newEdu);
});
router.delete("/:id", async(req, res)=>{
    const newEdu = await Education.findByIdAndDelete(req.params.id);
    res.status(200).json(newEdu);
});
module.exports = router;
