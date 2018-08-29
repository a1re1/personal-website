/**
 * name: resume.js
 * desc: the resume page for my personal website
 * author: tyler.whitehurst (twwhitehurst@gmail.com)
 */

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "home.html");
});

router.get("/resume",function(req,res){
    res.sendFile(path + "resume.html");
});

router.get("/blog",function(req,res){
    res.sendFile(path + "blog.html");
});

router.get("/portfolio",function(req,res){
    res.sendFile(path + "portfolio.html");
  });
  
router.get("/contact",function(req,res){
    res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(path + "404.html");
});

app.listen(8080,function(){
    console.log("Live at Port 8080");
});