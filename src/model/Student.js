const mongoose = require('mongoose');
const validator =require('validator');

const studentSchema= new mongoose.Schema({
    fullName : {
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    enrollmentNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    collegeName:{
        type: String,
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email']
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    currentCGPA: {
        type: Number,
        required: true
    },
    percentageOf10: {
        type: Number,
        required: true
    },
    percentageOf12: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    passingYear: {
        type: Number,
        required: true
    },
    appliedJobIds:{
        type: [String]
    },
    authId:{
        type:[String]
    }
})

const Student= new mongoose.model('Student', studentSchema);

module.exports=Student;