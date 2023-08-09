export default async(req,res,next)=>{
    if(req.user.role===3){
        return next()
    }
    return res.status(404).json({
        success:false,
        response:null,
        message:"User is not an Admin"
    })
}