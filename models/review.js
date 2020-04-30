const mongoose=require('../connection');
const Schema= mongoose.Schema;
const reviewSchema= new Schema({
    user: {type: mongoose.Types.ObjectId, ref: 'users'},
    product: {type: mongoose.Types.ObjectId, ref: 'model'},
    rating: Number,
    review: String
})
 
const hostmodel=mongoose.model('reviews',reviewSchema);
module.exports=hostmodel;