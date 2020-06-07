var express = require("express");
var route = express.Router();
var path = require("path");
route.use(express.static('source'));

route.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,'../source', 'main.html'))
});

route.get("/register", (req,res)=>{
    res.send("register");
});

module.exports= route;