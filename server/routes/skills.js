const express = require('express');
const skillSchema = require('../models/Skills.js');
const router = express.Router();

const Skills = skillSchema;

router.post("/", async (req, res) => {
  try {
    const { skillName, category} = req.body;
    const skill = await Skills.create({ skillName, category});
    res.status(201).json(skill);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const skill = await Skills.find();
    res.status(200).json(skill);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.put("/:id", async (req, res) => {
  const { skillName, category} = req.body;
  const newSkill = await Skills.findByIdAndUpdate(
    req.params.id,
    { skillName, category},
    { new: true },
  );
  res.status(200).json(newSkill);
});
router.delete("/:id", async(req, res)=>{
    const skill = await Skills.findByIdAndDelete(req.params.id);
    res.status(200).json(skill);
});
module.exports = router;
