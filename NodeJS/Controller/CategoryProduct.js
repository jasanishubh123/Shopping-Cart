var Category=require("../Model/Category")
var router=require("express").Router();

router.get("/",(req,res)=>{
    Category.find((err,data)=>{
        if(err)
        res.status(500).send(err);
        res.status(200).send(data);
    })
})

router.post("/",(req,res)=>{
    var c1=new Category({
        CategoryNo:req.body.CategoryNo,
        Category:req.body.Category
    })
    c1.save((err,data)=>{
        if(err)
        res.status(500).send(err);
        res.status(200).send(data);
    })
})

router.put("/:id",(req,res)=>{

    var newdata={
        CategoryNo:req.body.CategoryNo,
        Category:req.body.Category 
    }
    Category.updateOne({_id:req.params.id},newdata,(err,data)=>{
        if(err)
        res.status(500).send(err);
        res.status(200).send(data);

    })

})

router.delete("/:id",(req,res)=>{
    Category.deleteOne({_id:req.params.id},(err,data)=>{
        if(err)
        res.status(500).send(err);
        res.status(200).send(data);
    })
})

module.exports=router;