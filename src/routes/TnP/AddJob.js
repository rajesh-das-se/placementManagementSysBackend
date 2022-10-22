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