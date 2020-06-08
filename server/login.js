var express = require("express");
var route = express.Router();
var path = require("path");
route.use(express.static('source'));

route.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,'../source/views', 'main.html'))
});

route.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,'../source/views', 'register.html'))
});

module.exports= route;