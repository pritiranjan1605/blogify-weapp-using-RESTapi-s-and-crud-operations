const mongoose = require('mongoose')
const { schema } = require('./user')
const blogschema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverimageurl:{
        type:String,
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
},{timestamps:true});

const Blog = mongoose.model('blogs',blogschema)
module.exports = Blog;