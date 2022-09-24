const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const renovationListSchema = new Schema({

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

const renovationList = mongoose.model('RenovationList', renovationListSchema);

module.exports = renovationList;

