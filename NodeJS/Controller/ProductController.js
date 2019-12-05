var Products=require("../Model/shopping");
var router=require("express").Router();
var multer=require('multer');

//Get Method
var storage=multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname+ '-' + Date.now())
    },
    destination:(req,file,cb)=>{
        cb(null,'Upload')
    }
})

var Upload=multer({storage:storage})

router.get("/",(req,res)=>{
    Products.find((err,data)=>{
        if(err)
        res.status(500).send(err);
        if(!data)
        res.status(404).send("No Products Found");
        res.status(200).send(data);
    })
})

//find one

router.get("/:id",(req,res)=>{
    Products.findById({_id:req.params.id},(err,data)=>{
        if(err)
        res.status(500).send(err);
        if(!data)
        res.status(404).send("No Products Found");
        res.status(200).send(data);
    })
})

//post Method

router.post("/",Upload.single('Image'),(req,res)=>{
    const file=req.file;
    const url=req.protocol +"://"+req.get('host');
    var p1=new Products({
        ProductName:req.body.ProductName,
        ProductCompany:req.body.ProductCompany,
        CategoryId:req.body.CategoryId,
        MfgDate:req.body.MfgDate,
        Price:req.body.Price,
        Image:file.filename,
        ImagePath:url+"/Upload/"+file.filename,
        Description:req.body.Description
    })
    p1.save((err,data)=>{
        if(err)
        res.status(500).send(err)
        res.status(200).send(data);
    })

})

//put Method
router.put("/:id",(req,res)=>{
    var pro={
        ProductName:req.body.ProductName,
        ProductCompany:req.body.ProductCompany,
        CategoryId:req.body.CategoryId,
        MfgDate:req.body.MfgDate,
        Price:req.body.Price,
        Image:req.body.Image,
        Description:req.body.Description
    };
    Products.updateOne({_id:req.params.id},pro,(err,data)=>{
        if(err)
        res.status(500).send(err)
        res.status(200).send(data);
    })
})

//Delete Method
router.delete("/:id",(req,res)=>{
    Products.deleteOne({_id:req.params.id},(err,data)=>{
        if(err)
        res.status(500).send(err)
        res.status(200).send(data);
    })
})

module.exports=router;