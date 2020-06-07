var express = require("express");
var path = require("path");
var route = express.Router();

route.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'../source', 'main.html'))
})

module.exports = route;

