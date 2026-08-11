const mongoose = require("mongoose");
const eduSchema = new mongoose.Schema({
    degree:{type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Education', eduSchema);