const mysql = require('mysql'); 

exports.dbSetup = (dbName) => { 
    var db=mysql.createConnection({
        host: "database-1.cpxhclwvluez.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "admin",
        password: "2023demo",
        database: dbName
    });

  db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("DB connected");
  })
}