var mongoose=require("../Config/db");
var CategorySchema= mongoose.Schema
({

    CategoryNo:Number,
    Category:String
});
var catmodel=mongoose.model("CategoryTB",CategorySchema,"CategoryTB");
module.exports=catmodel;