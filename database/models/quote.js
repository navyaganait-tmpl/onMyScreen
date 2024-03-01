const { DataTypes } = require("sequelize");
var Sequelize = require("sequelize");
module.exports=(sequelize, DataTypes)=>{
    const quote= sequelize.define("quote",{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        }, 
        quote:{
            type:DataTypes.STRING,
            allowNull:false
        },
        quoteAuthor:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });

    return quote;
}