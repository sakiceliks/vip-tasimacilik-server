const mongoose = require("mongoose")

const transferSchema = mongoose.Schema({
    transferID:{
        type:Number,
        required: [true, "Please add a ID"]

    },
    transferDate: {
        type:String,
        required: [true, "Please add a date"]
    },
    transferTime: {
        type:String,
        required:[true, "Please add a time"],
    },
    transferStartLine: {
        type:String,
        required: [true, "Please add a start location"],
    },
    transferEndLine:{
        type:String,
        required: [true, "Please add a end location"],
    },
    transferCarID:{
        type:Number,
        required:[true,"Please add a Car ID"]
    },
    transferDriverID:{
        type:Number,
        required:[true,"Please add a Driver ID"]
    },
    transferPassengerID:{
        type:Number,
        required:[true,"Please add a Passenger ID"]

    }


},{timestamps:true})

module.exports = mongoose.model("Transfer",transferSchema);