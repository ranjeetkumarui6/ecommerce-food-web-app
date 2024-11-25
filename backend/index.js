const express=require('express')
const cors=require('cors');
const multer=require('multer')
const path=require('path')
const mongoose=require('mongoose');
const result=mongoose.connect("mongodb://127.0.0.1:27017/FastFood",)
result.then(()=>{
    console.log("success")
});
result.catch(()=>{
    console.log("fail")
})
const app=express();
app.use(express.json())
app.use(express.static("Cat-Pics"))
app.use(express.static('SubCat-Pics'))
app.use(express.static('Product-Pics'))
app.use(cors())
const SectionModel=require('./Models/SectionModel');
const SubsectionModel = require('./Models/SubsectionModel');
const ProductModel = require('./Models/ProducModel');
const { send } = require('process');

app.get("/category",async(req,res)=>{
    const re=await SectionModel.find()
    res.json(re)
})
const categorystore=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Cat-Pics")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname) )
    }
})
const categoryupload=multer({
    storage:categorystore
})
app.post("/category",categoryupload.single("Categorypic"),async(req,res)=>{
    const re=new SectionModel({
        Categoryname:req.body.Categoryname,
        Categorypic:req.file.filename,
    })
    await re.save();
    res.json({msg:"Caregory Save"})

})
app.delete("/category",async(req,res)=>{
    const re=await SectionModel.findOneAndDelete({_id:req.body.categoryid})
     res.json({msg:"Category Deleted"});
})
app.get("/category/:id",async(req,res)=>{
    const re=await SectionModel.find({_id:req.params.id})
    res.json(re)
})
app.put("/category",async(req,res)=>{
    const re=await SectionModel.findOneAndUpdate({_id:req.body.updateid},{Categoryname:req.body.Categoryname})
    res.json({msg:"Record updated"})
})

const subcategorystorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"SubCat-Pics");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const subcategoryupload=multer({
    storage:subcategorystorage
})

app.post("/subcategory", subcategoryupload.single("SubCategorypic"),async(req,res)=>{
const re=new SubsectionModel({
    Categoryid:req.body.Categoryid,
    SubCategoryname:req.body.SubCategoryname,
    SubCategorypic:req.file.filename,
})
await re.save();
res.json({msg:"record Save"});

})
app.patch("/subcategory",async(req,res)=>{
    const re=await SubsectionModel.find({
        Categoryid:req.body.Categoryid
    })
    res.json(re)

});
app.get("/subcategory",async(req,res)=>{
    const re=await SubsectionModel.find()
    res.json(re)

});
app.delete("/subcategory",async(req,res)=>{
    const re=await SubsectionModel.findOneAndDelete({_id:req.body.subcategoryid})
    console.log(req.body.subcategoryid)
    res.json({msg:"Subsection Deleted"})

})

app.get("/subcategory/:id",async(req,res)=>{
    const re=await SubsectionModel.find({_id:req.params.id})
    res.json(re);
});

app.put("/subcategory",async(req,res)=>{
    const re=await SubsectionModel.findOneAndUpdate({_id:req.body.updateid},{SubCategoryname:req.body.SubCategoryname})
    res.json({msg:"Record Updated"});
});

const Productpicstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        
        cb(null,"Product-Pics")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const productpicload=multer({
    storage:Productpicstorage,
})


app.post("/productdata",productpicload.single("Productpic"),async(req,res)=>{

    const re = new ProductModel({
        SubCategoryid:req.body.SubCategoryid,
        Productname:req.body.Productname,
        Productprice:req.body.Productprice,
        Productofferprice:req.body.Productofferprice,
        Productdescription:req.body.Productdescription,
        Productpic:req.file.filename,
    })
    
    await re.save();
    res.json({msg:"Save Record"})
})

app.patch("/productdata",async(req,res)=>{
    const re = await ProductModel.find({SubCategoryid:req.body.SubCategoryid});
    res.json(re);

})
app.get("/productdata",async(req,res)=>{
    const re = await ProductModel.find();
    res.json(re);

})
app.listen(7000,()=>{
    console.log("server started")
})

