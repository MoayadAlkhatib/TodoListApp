var express = require("express");
var route = express.Router();

route.get("/login", (req,res)=>{
    res.send("login");
})

route.get("/register", (req,res)=>{
    res.send("register");
})

module.exports= route;