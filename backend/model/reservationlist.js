const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservetionListSchema = new Schema({

    categoryId: {
        type: String,
        required: true,
        trim: true
    },
    client_name : {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: String,
        required: true,
        trim: true
    },
    payment_status: {
        type: String,
        required: true,
        trim: true
    }

},
{
    timestamps: true
});

const reservetionList = mongoose.model('ReservetionList', reservetionListSchema);

module.exports = reservetionList;

