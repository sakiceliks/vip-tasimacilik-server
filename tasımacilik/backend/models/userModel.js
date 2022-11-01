const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please add a name"]
    },
    email: {
        type:String,
        required:[true, "Please add a email"],
        unique:true,
        trim:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"

        ]
    },
    password:{
        type:String,
        required:[true, "Please add a password"],
        minLenght:[6, "Password must be up to 6 characters"],
        maxLenght:[23, "Password not be mpre than 23 characters. "],
    },
    photo: {
        type:String,
        required: [true, "Please add a photo"],
        default:"http://cdn.onlinewebfonts.com/svg/img_162386.png"
    },


})

const User = mongoose.model("User",userSchema)
module.exports = User