const express = require('express');
const router=express.Router();
const Job= require('./../../model/Job');

router.get('/', async (req, res)=>{
    try{
        if((req.cookies).authId=='19ucs046'){
            const jobList=await Job.find();
            res.json(jobList);
        }else{
            res.json({message: "authId is wrong"});
        }
    }catch(error){
        console.log(error.message);
    }
});

module.exports=router;