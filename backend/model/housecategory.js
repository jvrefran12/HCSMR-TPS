const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const houseCategorySchema = new Schema({

     client_name: {
        type: String,
        required: true,
        trim: true
    },
    location : {
        type: Number,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    materials: {
        type: String,
        required: true,
        trim: true
    },
    supplierId:{
        type: String,
        required: true,
        trim: true
    }

},
{
    timestamps: true
});

const houseCategory = mongoose.model('HouseCategory', houseCategorySchema);

module.exports = houseCategory;

