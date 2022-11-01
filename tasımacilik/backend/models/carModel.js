const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    carID: {
        type:Number,
        required: [true, "Please add a ID"]
    },
    carBrand: {
        type:String,
        required:[true, "Please add a Brand"],
    },
    carPlate:{
        type:String,
        required: [true, "Please add a plate number"],
    },
    carModelYears:{
        type:String,
        required: [true, "Please add a years info"],
    }


},{timestamps:true})

module.exports = mongoose.model("Car",carSchema);