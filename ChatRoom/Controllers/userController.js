const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../Models/User');
const catchAsyncError = require('../Utilities/catchAsyncError');
const CustomError = require('../Utilities/customError');

class userController {
    saveUserData = catchAsyncError(async(req,res,next)=>{
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const newUser = await User.create({...req.body})
        let data={
            time: Date.now(),
            userId: newUser.userId,
            name:newUser.name,
        }
        const token=jwt.sign(data,jwtSecretKey);
        res.status(201).send(token);
    })
    getUserData = catchAsyncError(async(req,res,next)=>{
        const user=await User.findByPk(req.query.userId,{attributes:{exclude:['loginTime','createdAt','updatedAt','password']}});
        res.status(200).send(user);
    })

    getAllUser = catchAsyncError(async(req,res,next)=>{
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
