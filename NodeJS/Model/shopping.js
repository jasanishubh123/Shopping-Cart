var mongoose=require("../Config/db");
var Schema=mongoose.Schema({
    ProductName:String,
    ProductCompany:String,
    CategoryId:Number,
    MfgDate:Date,
    Price:Number,
    Image:String,
    ImagePath:String,
    Description:String
});
var model=mongoose.model("ProductTB",Schema,"ProductTB");
module.exports=model;