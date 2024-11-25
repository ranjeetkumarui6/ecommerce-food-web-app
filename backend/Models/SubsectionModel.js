const mongoose=require('mongoose')
const SubsectionModel=mongoose.model("SubCategory", new mongoose.Schema({
    Categoryid:{type:String,require:true},
    SubCategoryname:{type:String,require:true},
    SubCategorypic:{type:String,require:true},
}))
module.exports=SubsectionModel;