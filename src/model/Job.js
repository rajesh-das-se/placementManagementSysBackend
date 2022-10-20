const mongoose = require('mongoose');
const validator =require('validator');

const jobSchema= new mongoose.Schema({
    jobId:{
        type: String,
        required: true,
        unique: true
    },
    companyName : {
        type: String,
        required: true
    },
    aboutCompany:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    tier: {
        type: String,
        required: true
    },
    ctc: {
        type: Number,
        required: true
    },
    ctcBreakDown:{
        type: [String],
        required: true
    },
    courses: {
        type: [String],
        required: true
    },
    branches: {
        type: [String],
        required: true,
    },
    otherCriteria: {
        type: [String],
    },
    location: {
        type: [String],
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    interviewDetails: {
        type: String,
        default: "To be decided"
    },
    appliedStudentEnrolls:{
        type: [String]
    }
})

const Job= new mongoose.model('Job', jobSchema);

module.exports=Job;