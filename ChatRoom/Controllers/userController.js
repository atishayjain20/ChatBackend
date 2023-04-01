const { User } = require('../Models/User');
const catchAsyncError = require('../Utilities/catchAsyncError');
const customError = require('../Utilities/customError');

class userController {

    saveUserData = catchAsyncError(async(req,res,next)=>{
        const newUser = await User.create({...req.body})

        res.status(201).send(newUser)
    })


    getUserData = catchAsyncError(async(req,res,next)=>{

        const userData = User.findAll().then(res => {
            console.log("Data of user",res)
            return res;
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });

        res.status(200).json({
            success: true,
            message: userData
        })
    }) 
}

module.exports = new userController;
