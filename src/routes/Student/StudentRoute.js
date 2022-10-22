const express = require('express');
const router=express.Router();
const StudentCookieValidator=require('./../../middlewares/StudentCookieValidator');
const studentJobs=require('./Jobs');
const SearchJob= require('./SearchJob');
const AppliedJobs=require('./AppliedJobs');
const StudentProfile=require('./StudentProfile');
const ApplyJob=require('./ApplyJob');

router.use(StudentCookieValidator);

router.get('/', (req, res)=>{
    res.json({message:"Okay it's working"});
})

router.use('/jobs', studentJobs);

//get specific job details via jobId
//http://localhost:8081/student/jobs/search?jobId=p8k3b6fm4l
router.use('/jobs/search', SearchJob);

router.use('/applied', AppliedJobs);

//https://localhost:8081/student/apply?jobId=
router.use('/apply',  ApplyJob);

router.use('/profile',  StudentProfile);


module.exports=router;