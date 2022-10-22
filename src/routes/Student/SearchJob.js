const express = require('express');
const router=express.Router();
const Job= require('./../../model/Job');

router.get('/',  async (req, res)=>{
    try {
        const jobId=req.query.jobId;
        const jobDetail= await Job.findOne({jobId: jobId});
        console.log(jobDetail);
        res.json(jobDetail);
    } catch (error) {
        console.log(error.message);
        res.json({message: "Error occured!!"});
    }
});

module.exports=router;