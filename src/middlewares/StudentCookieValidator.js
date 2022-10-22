const validateStudentCookie= async (req, res, next)=>{
    if(req.cookies.authId=='19ucs046'){
        next();
    }else{
        res.json({
            message: "Authentication Error"
        })
    }
}

module.exports=validateStudentCookie;