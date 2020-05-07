const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userschema = new Schema({
    name : String,
    price : Number,
    compatibility : Array, 
    image_formats : Array, 
    size : Number,
    geometry :Number,
    vertices :Number,
    textures : Number,

    file : String,
    image : String
})

const product = mongoose.model('model' , userschema);

module.exports = product;