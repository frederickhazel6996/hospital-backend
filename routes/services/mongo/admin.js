var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Database Schema
var adminSChema = new Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    access_level: { type: Number, default: 1 },
    id: String,
    date_created: String
});

//User Schema
var admins = mongoose.model('admins', adminSChema);

module.exports = admins;
