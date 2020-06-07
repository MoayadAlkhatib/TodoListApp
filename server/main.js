var express = require("express");

var route = express.Router();

route.get("/", (req,res)=>{
    res.redirect('/user/login');
})

module.exports = route;

