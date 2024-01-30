const { File } = require('buffer');
const express = require('express')
const router = express.Router();
const multer = require('multer')
const path =require('path')
const blog1 = require('../models/blog')
const Comment = require('../models/coment')
const storage=multer.diskStorage({
    destination:function(req,file,cb) {
        return cb(null,path.resolve('./public/uploads/'))
    },
    filename:function(req,file,cb) {
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})
router.get('/add-new',(req,res)=>{
    return res.render('addblog',{
        user: req.user
    })
})
router.get('/:id',async (req,res)=>{
    const blog = await blog1.findById(req.params.id).populate('createdby')
    const comments =await Comment.find({blogid:req.params.id}).populate('createdby')
    console.log(comments)
    return res.render('blog',{
        user:req.user,
        blog:blog,
        comments:comments
    })
})

router.post('/',upload.single("coverimage"),async (req,res)=>{
    const {title,body,} = req.body
    const blog = await blog1.create({
        title,
        body,
        createdby:req.user._id,
        coverimageurl:`/uploads/${req.file.filename}`
    })
    return res.redirect(`/blog/${blog._id}`)
})

router.post('/comment/:blogid',async(req,res)=>{
    const comment = await Comment.create({
        content:req.body.content,
        blogid:req.params.blogid,
        createdby:req.user._id
    })
    return res.redirect(`/blog/${req.params.blogid}`)
})
module.exports=router