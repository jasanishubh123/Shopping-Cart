var path=require("path");
var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var cors=require("cors");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
console.log(path.join("NodeJS/Upload"));
app.use('/Upload',express.static(path.join('Upload')))
app.use(cors({origin:"http://localhost:4200"}));
var ProductController=require("./Controller/ProductController");
app.use("/Product",ProductController);
var CategoryController=require("./Controller/CategoryProduct");
app.use("/Category",CategoryController);
var User=require("./Controller/UserController");
app.use("/",User);
app.listen(8888);