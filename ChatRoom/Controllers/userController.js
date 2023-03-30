const User = require('../Models/User');
const catchAsyncError = require('../Utilities/catchAsyncError');
const customError = require('../Utilities/customError');

const userController={}

userController.saveUserData = catchAsyncError(async(req,res,next)=>{
    const newUser = await User.create(req.body).then(res=>{
        console.log("User Created Successfully",newUser.userId);
    });
})

userController.getUserData = catchAsyncError(async(req,res,next)=>{
    res.status(200).json({
        success: true,
        message:"Hello World"
    })
}) 

module.exports = userController;
