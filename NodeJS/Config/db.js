var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShoppingSystem",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.set("usefindAndModify",false);
var db=mongoose.connection;
db.once('open',()=>{
    console.log("Connection Successful");
})
db.on('error',()=>{
    console.error.bind(console,"Connection Error");
})
module.exports=mongoose;