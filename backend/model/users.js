const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    role: {
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

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

