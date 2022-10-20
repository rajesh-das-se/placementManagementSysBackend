const express = require('express');
const cookieParser = require('cookie-parser');
require('./DB/conn');
const Student = require('./model/Student');
const Job=require('./model/Job');
const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid');
const generateUniqueId = require('generate-unique-id');
const url = require('url');

const port=process.env.PORT||8081;

const app=new express();

const validateStudentCookie= async (req, res, next)=>{
    if(req.cookies.authId=='19ucs046'){
        next();
    }else{
        res.json({
            message: "Authentication Error"
        })
    }
}

app.use(express.json());
app.use(cookieParser());
// app.use(validateStudentCookie);

app.get('/', (req, res)=>{
    res.send("Hello world");
})

//for testing purpose
// app.get('/test', async(req, res)=>{
//     res.json({mess: "okay"});
// })


app.get('/student', (req, res)=>{
    let data={
        data:"N/A"
    }
    res.json(data);
})


//this will give all the job datails
app.get('/student/jobs', validateStudentCookie, async (req, res)=>{
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


//for testing purpose
// app.get('/addjob',  async (req, res)=>{
//     try {
//         // const data=req.body;
//         const jobDeatails=new Job({
//             jobId: generateUniqueId({
//                 length: 10
//             }),
//             companyName : "Google",
//             aboutCompany: "ji jhuh ikuuh jhuyh jihj",
//             role: "SDE",
//             tier: "Dream",
//             ctc: 34,
//             ctcBreakDown:["Base : 12lpa", "bonus: 6lpa"],
//             courses: ["B.Teach", "M.Teach"],
//             branches: ["CSE", "ECE"],
//             location: ["Bangalore", "mumbai"],
//             deadline: Date.now()
//         });
//         const ack= await jobDeatails.save();
//         console.log(ack);
//         res.json({message: "daetails saved successfully"});
//     } catch (error) {
//         console.log(error.message);
//         res.json({message: "Error occured!!"});
//     }
// })

// app.get('/addstudent',  async (req, res)=>{
//     try {
//         // const data=req.body;
//         const studentDeatails=new Student({
//             fullName : "Rajesh Das",
//             fatherName: "Krishnadhan Das",
//             motherName: "Anjali Das",
//             enrollmentNumber: "19ucs046",
//             address: "Vill+P.O: Pandabpur",
//             collegeName:"National Institute of Technology",
//             resumeLink: "htttps://drive/bh",
//             email: "rajesh1585700@gmail.com",
//             phoneNumber: 7005372986,
//             currentCGPA: 7.34,
//             percentageOf10: 81.57,
//             percentageOf12: 75.2,
//             course: "B.tech",
//             branch: "CSE",
//             passingYear: 2023,
//             appliedJobIds: ["p8k3b6fm4l"],
//             authId:[""]
//         });
//         const ack= await studentDeatails.save();
//         console.log(ack);
//         res.json({message: "daetails saved successfully"});
//     } catch (error) {
//         console.log(error.message);
//         res.json({message: "Error occured!!"});
//     }
// })


//get specific job details via jobId
//http://localhost:8081/student/jobs/search?jobId=p8k3b6fm4l
app.get('/student/jobs/search', validateStudentCookie, async (req, res)=>{
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


app.get('/student/applied', validateStudentCookie,  async (req, res)=>{
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


//https://localhost:8081/student/apply?jobId=
app.get('/student/apply', validateStudentCookie, async (req, res)=>{
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

app.get('/student/profile', validateStudentCookie, async (req, res)=>{
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


app.listen(port, (err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Server is running at http://localhost:${port}/`);
    }
});