const { DataTypes } = require("sequelize");
var Sequelize = require("sequelize");
module.exports=(sequelize, DataTypes)=>{
    const subscriber= sequelize.define("subscriber",{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        }, 
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });

    return subscriber;
}