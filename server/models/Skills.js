const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  category: {
  type: String,
  enum: ['Languages', 'Frameworks and Libraries', 'Tools and Platforms', 'Soft Skills'],
  required:true
},
});
module.exports = mongoose.model("Skill", skillSchema);
