const mongoose =require('mongoose')
const commentschema = mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    blogid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blog'
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }

},{timestamps: true}
)
const Comment = new mongoose.model("comments",commentschema)



module.exports=Comment;