const express = require('express');
const cors= require('cors');
const mongoose= require('mongoose')

// for pagination 3 things required (page,limit,skip)
// http://localhost:3000/api/data/?page=1&limit=4
// query parameter required to retrieve data   console.log(req.query)-> {page:'1',limit:'4'}

const BlogRouter = require('./routes/BlogRouter.js');

const app=express()

//middleware
app.use(express.json())
app.use(cors())

async function main(){
    await mongoose.connect('mongodb://localhost:27017/Pagination') 
}

main().then(()=>{
    console.log('Connected to db')
}).catch((err)=>{
    console.log(err)
})

// Routes
app.use('/api',BlogRouter)

app.listen(3000,()=>{
    console.log('app is listening on port 3000')
})