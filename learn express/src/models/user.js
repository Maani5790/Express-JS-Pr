const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
}, {timestamps: true});

modules.exports = mongoose.model("User", UserSchema)