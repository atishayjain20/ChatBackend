const express = require('express');
const {dbSetup} = require('./Models/dbConnection');
const app = express();

app.listen(5000,()=>{ 
    dbSetup("chatDB");
    console.log("Listening at port 5000")
});

module.exports = app;