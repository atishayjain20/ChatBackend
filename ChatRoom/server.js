const express = require('express');
const {dbSetup} = require('./Models/dbConnection');
const {User} = require('./Models/User')
const userRouter = require('./Routes/userRoute');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use("/",userRouter);

app.use(function (req, res, next) {
  next(new CustomError("Invalid Route", 404));
});

app.listen(5000,()=>{ 
    // dbSetup("chatDB");
    console.log("Listening at port 5000")
    sequelize.sync().then(() => {

        User.findAll().then(res => {
            console.log("Data of user",res)
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
      
      }).catch((error) => {
        console.error('Unable to create table : ', error);
      });
});

module.exports = app;