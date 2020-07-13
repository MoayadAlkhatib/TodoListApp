import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
var userroute = express.Router();
userroute.use(express.static('source'));

userroute.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,'../views', 'main.html'))
});

userroute.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,'../views', 'register.html'))
});

userroute.get("/dashboard", (req,res)=>{
    res.sendFile(path.join(__dirname,'../views', 'dashboard.html'))
});

export default userroute;