const express = require('express');
const router=express.Router();
const Job= require('./../../model/Job');
const Student = require('./../../model/Student');
const StudentCookieValidator=require('./../../middlewares/StudentCookieValidator');

router.get('/', StudentCookieValidator, async (req, res)=>{
    try {
        const authId=req.cookies.authId;
        const studentDetails=await Student.findOne({authId: authId});
        console.log(studentDetails);
        res.json(studentDetails);
    } catch (error) {
        console.log(error.message);
        res.json({message: "Error occured!!"});
    }
})

module.exports=router;