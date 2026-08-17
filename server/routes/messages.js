const express = require('express');
const msgSchema = require('../models/Messages.js');
const router = express.Router();

const Messages = msgSchema;

router.post("/", async (req, res) => {
  try {
    const {name, email, message, date, status} = req.body;
    const msg = await Messages.create({name, email, message, date, status});
    res.status(201).json(msg);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const msg = await Messages.find();
    res.status(200).json(msg);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
});
router.put("/:id", async (req, res) => {
  const {name, email, message, date, status} = req.body;
  const msg = await Messages.findByIdAndUpdate(
    req.params.id,
    {name, email, message, date, status},
    { new: true },
  );
  res.status(200).json(msg);
});
router.delete("/:id", async(req, res)=>{
    const msg = await Messages.findByIdAndDelete(req.params.id);
    res.status(200).json(msg);
});
module.exports = router;
