const { Router } = require("express") 
const User = require('../models/user')
const express = require('express');
const { TokenExpiredError } = require("jsonwebtoken");
const router  = Router();
router.get('/signin',(req,res)=>{
    return res.render('signin')
})
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.post('/signup', async(req,res)=>{
    const {fullname,email,password}= req.body
    await User.create({
        fullname,email,password
    })
    return res.redirect('/')
})
router.post('/signin',async(req,res)=>{
    const{email,password} = req.body;
    
   try{
    const token= await User.matchpasswordandgeneratetoekn(email,password)
    return res.cookie("token",token).redirect('/')
   }catch(err){
    return res.render('signin',{
        error:"incorrect email or password"
    })
   }
     
})

router.get('/logout',(req,res)=>{
    res.clearCookie('token').render('home')
})
module.exports =router;