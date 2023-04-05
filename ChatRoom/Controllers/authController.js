const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsyncError = require("../Utilities/catchAsyncError");
const CustomError = require("../Utilities/customError");

class authController{
    login=catchAsyncError(async(req,res,next)=>{
        const user=await User.findByPk(req.query.userId,{attributes:{exclude:['loginTime','createdAt','updatedAt']}});
        if(!user){
            throw new CustomError("User not exist",400);
        }
        bcrypt.compare(req.query.password.toString(),user.getDataValue('password'),function(err,result){
            if (err) { throw new CustomError(err.message,400); }
            if(result){
                let data={
                    time: Date.now(),
                    userId: user.userId,
                    name: user.name,
                }
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token=jwt.sign(data,jwtSecretKey);
                res.status(200).json({
                    success:true,
                    message: token
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Userid and password does not match"
                })
            }
        })   
    })
}

module.exports = new authController;