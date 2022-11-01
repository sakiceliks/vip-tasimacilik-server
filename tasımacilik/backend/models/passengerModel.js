const mongoose = require("mongoose")

const passengerSchema = mongoose.Schema({
    passengerID:{
        type:Number,
        required: [true, "Please add a ID"]

    },
    passengerName: {
        type:String,
        required: [true, "Please add a name"]
    },
    passengerMail: {
        type:String,
        required:[true, "Please add a email"],
        unique:true,
        trim:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"

        ]
    },
    passengerPhoto: {
        type:String,
        required: [true, "Please add a photo"],
        default:"http://cdn.onlinewebfonts.com/svg/img_162386.png"
    },
    passengerPhone:{
        type:String,
        required: [true, "Please add a phone number"],
        default:"+90",
    },
    passengerType:{
        type:String,
        required:[true,"Please add a type"]
    }


},{timestamps:true})

module.exports = mongoose.model("Passenger",passengerSchema);