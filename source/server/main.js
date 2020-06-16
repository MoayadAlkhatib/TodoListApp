import express from 'express'

var mainroute = express.Router();

mainroute.get("/", (req,res)=>{
    res.redirect('/user/login');
})

export default mainroute;

