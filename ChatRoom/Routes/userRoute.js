const { Router } = require("express");
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");

const userRouter = Router();

userRouter.get("/user",userController.getUserData);
userRouter.post("/user",userController.saveUserData);
userRouter.get("/login",authController.login);
module.exports = userRouter;