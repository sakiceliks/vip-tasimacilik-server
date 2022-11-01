const express = require ("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const driverModel = require("./models/driverModel")
const carModel = require("./models/carModel")
const passengerModel = require("./models/passengerModel");
const transferModel = require("./models/transferModel");

const app = express();


app.use(bodyParser.json()); 
app.use(cors());

// mongoose connection

mongoose.connect("mongodb+srv://saki:Baki58++@mern.mhhyfp6.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true}).then(console.log("Bağlantı Başarılı"))
    .catch((err) => console.log(err))


app.get('/drivers',(req,res) =>{
    driverModel.find().then(drivers => res.json(drivers));
})

app.get('/cars',(req,res) =>{
    carModel.find().then(cars => res.json(cars));
})

app.get('/passengers',(req,res) =>{
    passengerModel.find().then(passengers => res.json(passengers));
})


app.get('/transfers',(req,res) =>{
    transferModel.find().then(transfers => res.json(transfers));
})



app.post('/newDriver', async (req,res) =>{
    try{
        const newDriver = new driverModel({
            driverID:req.body.driverID,
            driverName: req.body.driverName,
            driverMail: req.body.driverMail,
            driverPhoto: req.body.driverPhoto,
            driverPhone: req.body.driverPhone,
        })

const driver = await newDriver.save();



res.status(200).json(driver)

    }catch(err) {
        console.log(err)
    }
})


app.post('/newCar', async (req,res) =>{
    try{
        const newCar = new carModel({
            carID:req.body.carID,
            carBrand:req.body.carBrand,
            carPlate:req.body.carPlate,
            carModelYears:req.body.carModelYears,

        })

    const car = await newCar.save()
    res.status(200).json(car)

    }catch(err) {
        console.log(err)
    }
})


app.post('/newPassenger', async (req,res) =>{
    try{
        const newPassenger = new passengerModel({
            passengerID:req.body.passengerID,
            passengerName:req.body.passengerName,
            passengerMail:req.body.passengerMail,
            passengerPhoto:req.body.passengerPhoto,
            passengerPhone:req.body.passengerPhone,
            passengerType:req.body.passengerType,


        })

    const passenger = await newPassenger.save()
    res.status(200).json(passenger)

    }catch(err) {
        console.log(err)
    }
})

app.post('/newTransfer', async (req,res) =>{
    try{
        const newTransfer = new transferModel({
            transferID:req.body.transferID,
            transferDate:req.body.transferDate,
            transferTime:req.body.transferTime,
            transferStartLine:req.body.transferStartLine,
            transferEndLine:req.body.transferEndLine,
            transferCarID:req.body.transferCarID,
            transferDriverID:req.body.transferDriverID,
            transferPassengerID:req.body.transferPassengerID,


        })

    const transfer = await newTransfer.save()
    res.status(200).json(transfer)

    }catch(err) {
        console.log(err)
    }
})


app.delete('/delete/driver/:id', (req,res) =>{
    const id = req.params.id;
    driverModel.findByIdAndDelete({_id:id}, (err) =>{
        if(!err) {
            console.log("sürücü silindi");
        }else{
            console.log(err);
        }
    })
})


app.delete('/delete/car/:id', (req,res) =>{
    const id = req.params.id;
    carModel.findByIdAndDelete({_id:id}, (err) =>{
        if(!err) {
            console.log("araç silindi");
        }else{
            console.log(err);
        }
    })
})


app.delete('/delete/passenger/:id', (req,res) =>{
    const id = req.params.id;
    passengerModel.findByIdAndDelete({_id:id}, (err) =>{
        if(!err) {
            console.log("yolcu silindi");
        }else{
            console.log(err);
        }
    })
})







app.listen(5000, () => {
    console.log(`Server is running`)
})




