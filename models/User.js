const mongoose = require('mongoose');


// main tree
const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'please enter username'],
        unique: [true, "username already exists"],
    },
    firstname: {
        type: String, 
        required: [true, 'please enter first name'],
    },
    lastname: {
        type: String, 
        required: [true, 'please enter last name'],
    },
    password: {
        type: String, 
        required: true,
        minlength: 6,
        match: [/[A-Za-z0-9#$&_]+$/, 'password must be alphanumeric, # $ & _']
    },
    email: {
        type: String, 
        required: true,
        unique: [true, "email already exists"],
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email address']
    },
    type: {
        type: String,
        enum: ['admin', 'customer'],
        require: true,
        lowercase: true
    }
})


const User = mongoose.model("User", UserSchema);
module.exports = User;