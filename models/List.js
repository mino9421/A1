const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    listing_title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String, 
        required: true,
        maxLength: 1000,
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email address']
    },
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        trim: true,
        lowercase: true
    },
});

const List = mongoose.model("Listing", ListSchema);
module.exports = List;