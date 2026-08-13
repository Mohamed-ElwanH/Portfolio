const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  liveLink:{
    type:String,
    required:true
  },
  repoLink: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Projects", projectSchema);