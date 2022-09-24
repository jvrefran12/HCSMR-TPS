const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierInfoSchema = new Schema({

    name: {
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
    status: {
        type: String,
        required: true,
        trim: true
    }

},
{
    timestamps: true
});

const SupplierInfo = mongoose.model('SupplierInfo', supplierInfoSchema);

module.exports = SupplierInfo;

