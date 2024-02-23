

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    mrd: { type: String, required: true, unique: true },
    name: {type: String,required: true,unique: true},
    email: {type: String, required: true },
    mobile:{type:String,required:true},
    date: { type: Date, default: Date.now }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
