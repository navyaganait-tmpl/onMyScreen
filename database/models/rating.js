const { DataTypes } = require("sequelize");
var Sequelize = require("sequelize");
module.exports=(sequelize, DataTypes)=>{
    const rating= sequelize.define("rating",{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        }, 
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rating:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        ratingImage:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });

    return rating;
}