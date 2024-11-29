const mongoose = require("mongoose")

const blogSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
    }
},{timestamps:true})

const BlogModel=mongoose.model('BlogModel',blogSchema)


module.exports=BlogModel;