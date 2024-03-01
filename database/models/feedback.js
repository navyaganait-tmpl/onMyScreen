const { DataTypes } = require("sequelize");
var Sequelize = require("sequelize");
module.exports=(sequelize, DataTypes)=>{
    const feedback= sequelize.define("feedback",{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        }, 
        firstName:{
            type:DataTypes.STRING
        },
        lastName:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reviews:{
            type:DataTypes.STRING
        }

    });

    return feedback;
}