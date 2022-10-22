const express = require('express');
const cookieParser = require('cookie-parser');
require('./DB/conn');
const {v4:uuidv4} = require('uuid');
const generateUniqueId = require('generate-unique-id');
const url = require('url');
const StudentRoute=require('./routes/Student/StudentRoute');

const port=process.env.PORT||8081;

const app=new express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello world");
})

app.use('/student', StudentRoute)

app.listen(port, (err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Server is running at http://localhost:${port}/`);
    }
});