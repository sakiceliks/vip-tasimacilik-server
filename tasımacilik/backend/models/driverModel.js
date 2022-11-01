const mongoose = require("mongoose")

const driverSchema = mongoose.Schema({
    driverID:{
        type:Number,
        required: [true, "Please add a ID"]

    },
    driverName: {
        type:String,
        required: [true, "Please add a name"]
    },
    driverMail: {
        type:String,
        required:[true, "Please add a email"],
        unique:true,
        trim:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"

        ]
    },
    driverPhoto: {
        type:String,
        required: [true, "Please add a photo"],
        default:"http://cdn.onlinewebfonts.com/svg/img_162386.png"
    },
    driverPhone:{
        type:String,
        required: [true, "Please add a phone number"],
        default:"+90",
    }


},{timestamps:true})

module.exports = mongoose.model("Driver",driverSchema);