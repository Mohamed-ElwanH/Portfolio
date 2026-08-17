const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
  _id: { type: String, default: "singleton" },
  fullName: {
    type: String,
    required: true,
    uppercase: true,
    //trim: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true, //turns into lowercase
    trim: true, //removes whitespace before and after the words
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    unique: true,
  },
  shortBio: {
    type: String,
    required: true,
  },
  longBio: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
    required: [true, "URL is required"],
    trim: true,
    lowercase: true,
    match: [
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "Please fill a valid URL",
    ],
  },
  linkedInURL: {
    type: String,
    required: [true, "URL is required"],
    trim: true,
    lowercase: true,
    match: [
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "Please fill a valid URL",
    ],
  },
});

module.exports = mongoose.model("About", aboutSchema);
