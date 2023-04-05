const { Router } = require("express");
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");

const userRouter = Router();

userRouter.get("/",userController.getUserData);

module.exports = userRouter;