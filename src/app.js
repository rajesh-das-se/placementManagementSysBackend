const express = require('express');
const cookieParser = require('cookie-parser');
require('./DB/conn');
const {v4:uuidv4} = require('uuid');
const generateUniqueId = require('generate-unique-id');
const url = require('url');
const studentJobs=require('./routes/Student/Jobs');
const SearchJob= require('./routes/Student/SearchJob');
const AppliedJobs=require('./routes/Student/AppliedJobs');
const StudentProfile=require('./routes/Student/StudentProfile');
const ApplyJob=require('./routes/Student/ApplyJob');

const port=process.env.PORT||8081;

const app=new express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello world");
})

app.get('/student', (req, res)=>{
    let data={
        data:"N/A"
    }
    res.json(data);
})


//this will give all the job datails
app.use('/student/jobs', studentJobs);

//get specific job details via jobId
//http://localhost:8081/student/jobs/search?jobId=p8k3b6fm4l
app.use('/student/jobs/search', SearchJob);

app.use('/student/applied', AppliedJobs);

//https://localhost:8081/student/apply?jobId=
app.use('/student/apply',  ApplyJob);

app.use('/student/profile',  StudentProfile);

app.listen(port, (err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Server is running at http://localhost:${port}/`);
    }
});