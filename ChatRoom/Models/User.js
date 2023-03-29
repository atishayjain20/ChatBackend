var {dbSetup} = require('./dbConnection');
const {DataTypes} = require("sequelize");
var sequelize=dbSetup("chatDB");

exports.User=sequelize.define(
    "User",
    {
      userId:{
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      age:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gender:{
        type:DataTypes.ENUM("Male","Female"),
        allowNull: true
      },
      country:{
        type: DataTypes.STRING,
        allowNull: true
      },
      userType:{
        type: DataTypes.ENUM("Admin","Anonymous","LoggedIn"),
        allowNull: true
      },
      email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true
        } 
      },
      loginTime:{
        type: DataTypes.TIME,
        allowNull: false
      }
    }
)
