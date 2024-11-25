const mongoose=require('mongoose');
const SectionModel=mongoose.model("Category", new mongoose.Schema({
    Categoryname:{type:String,require:true},
    Categorypic:{type:String,require:true},
}))
module.exports=SectionModel;