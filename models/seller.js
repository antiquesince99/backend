const mongoose = require('../connection');
const Schema = mongoose.Schema;
 
const sellerschema = new Schema({
    name : String,
    email :String,
    contact :String,
    password :String,
    avatar:String,
    created : Date
 
})
const sellermodel = mongoose.model('seller' , sellerschema);
 
module.exports = sellermodel;