const mongoose = require('mongoose');
const ProductModel = mongoose.model("Product", new mongoose.Schema({
    SubCategoryid:{type:String,require:true},
    Productname:{type:String,require:true},
    Productprice:{type:String,require:true},
    Productofferprice:{type:String,require:true},
    Productdescription:{type:String,require:true},
    Productpic:{type:String,require:true},
}))

module.exports=ProductModel;