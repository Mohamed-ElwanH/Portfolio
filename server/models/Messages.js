const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    required: true,
  },
  message:{
    type:String,
    required:true
  },
  date: {
    type: String,
    match: [/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date (YYYY-MM-DD)'],
    required: true,
  },
  status: {
  type: String,
  enum: ['unread', 'read'],
  default: 'unread',
},
});
module.exports = mongoose.model("Messages", messageSchema);