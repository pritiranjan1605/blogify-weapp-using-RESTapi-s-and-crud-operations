require("dotenv").config();
const express= require('express')
const app =express();
const path = require('path')
const Blog =require('./models/blog')

const userroute = require('./routes/user');
const blogroute = require('./routes/blog');


const { default: mongoose } = require('mongoose');
const { error } = require('console');
const cookieparser = require('cookie-parser');
const { checkforcookie } = require('./middlewear/authentication');
const { env } = require('process');


app.use(express.urlencoded({extended:false}))
app.use(cookieparser())
app.use(checkforcookie("token"))
app.use(express.static(path.resolve('./public')))


app.set("view engine","ejs")
app.set('views',path.resolve("./views"))


app.use("/user",userroute)
app.use("/blog",blogroute)


app.get('/',async (req,res)=>{
    const allBlogs = await Blog.find({});
    return res.render('home',{
        user: req.user,
        blogs: allBlogs
    })
})


mongoose.connect(process.env.MONGO_URL).then((req,res)=>console.log("mongodb connected")).catch((err)=>console.log(err))

const port =process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})