const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userschema = new Schema({
    name : String,
    username : String,
    password : String,
    email : String,
    avtar : String,
    created: Date,
})

const usermodel = mongoose.model('user' , userschema);

module.exports = usermodel