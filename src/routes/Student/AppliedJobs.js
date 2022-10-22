const express = require('express');
const router=express.Router();
const Job= require('./../../model/Job');
const Student = require('./../../model/Student');

router.get('/',  async (req, res)=>{
    try {
        const data= await Student.find({authId: '19ucs046'});
        const jobIds=data[0].appliedJobIds;
        const jobDeatails=[];
        for(let i=0; i<jobIds.length; i++){
            jobDeatails.push(await Job.findOne({jobId: jobIds[i]}));
        }
        res.json(jobDeatails);
    } catch (error) {
        console.log(error.message);
        res.json({message: "Error occured!!"});
    }
});

module.exports=router;