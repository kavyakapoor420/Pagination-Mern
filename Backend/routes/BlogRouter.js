const express= require('express');
const BlogModel = require('../models/BlogModel.js');
const members = require('../DummyData');

// prompt to generate fake data from ChatGpt 
// give me dummy data which is array of 30 members each member is an object and will have object fields (name,email and description )


const BlogRouter=express.Router() 

//post data route ->http://localhost:3000/api/data
BlogRouter.post('/data',async (req,res)=>{
    try{
         const newData=await BlogModel.insertMany(members)
          return res.send({data:newData})
        }catch(err){
     // console.log(err)
     return res.send({message:err.message});
    }
})

//route for fet data with pagination ->http://localhost:3000/api/data/?page=1&limit=4
BlogRouter.get('/data',async (req, res)=>{
        // const {page,limit}=req.query
        const page=parseInt(req.query.page) || 1
        const limit=parseInt(req.query.limit) || 5 
        const startIndex=(page-1)*limit
      //   const endIndex=page*limit
    try{

          const totalValue=(await BlogModel.find()).length

          const blogData=await BlogModel.find().skip(startIndex).limit(limit)
        return res.send({data:blogData,value:totalValue})

        }catch(err){
     // console.log(err)
     return res.send({message:err.message});
    }
})


module.exports =BlogRouter;