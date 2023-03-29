const express = require('express');
const {dbSetup} = require('./Models/dbConnection');
const {User} = require('./Models/User')
const app = express();

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