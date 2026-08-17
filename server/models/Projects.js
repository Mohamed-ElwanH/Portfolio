const express = require('express');
const projectSchema = require('../models/Projects.js');
const router = express.Router();

const Project = projectSchema;

router.post("/", async (req, res) => {
  try {
    const { title, meta, desc, tags, img, liveLink, repoLink} = req.body;
    const proj = await Project.create({ title, meta, desc, tags, img, liveLink, repoLink});
    res.status(201).json(proj);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const proj = await Project.find();
    res.status(200).json(proj);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.put("/:id", async (req, res) => {
  const { title, meta, desc, tags, img, liveLink, repoLink}= req.body;
  const newProj = await Project.findByIdAndUpdate(
    req.params.id,
    { title, meta, desc, tags, img, liveLink, repoLink},
    { new: true },
  );
  res.status(200).json(newProj);
});
router.delete("/:id", async(req, res)=>{
    const proj = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json(proj);
});
module.exports = router;