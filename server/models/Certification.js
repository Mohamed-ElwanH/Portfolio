const mongoose = require("mongoose");
const certSchema = new mongoose.Schema({
  certName: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Certification", certSchema);
