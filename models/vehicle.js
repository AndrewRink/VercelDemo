const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        require: true
    },
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type:String
    },
    horsePower: {
        type:Number
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema)