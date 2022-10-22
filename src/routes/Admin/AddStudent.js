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