const { DataTypes } = require("sequelize");
var Sequelize = require("sequelize");
module.exports=(sequelize, DataTypes)=>{
    const favMovies= sequelize.define("favMovies",{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        }, 
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        movieImage:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });

    return favMovies;
}