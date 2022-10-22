const express = require('express');
const router=express.Router();
const Job= require('./../../model/Job');
const Student = require('./../../model/Student');

router.get('/', async (req, res)=>{
    try {
        const jobId=req.query.jobId;
        const studentData=await Student.findOne({authId: '19ucs046'});
        const jobDetails= await Job.findOne({jobId: jobId});

        studentData.appliedJobIds.push(jobId);
        jobDetails.appliedStudentEnrolls.push(studentData.enrollmentNumber);
        
        const ack1=await studentData.save();
        const ack2=await jobDetails.save();

        console.log(ack1);
        console.log(ack2);

        res.json({mess: "applied"});
    } catch (error) {
        console.log(error.message);
        res.json({message: "Error occured!!"});
    }
})

module.exports=router;