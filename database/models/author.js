const { DataTypes } = require("sequelize");
const blog = require("./blogs");
// const blogs=require('./blog');
module.exports=(sequelize, DataTypes)=>{
    const author= sequelize.define("author",{
        AuthorId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        profileImageLink:{
            type:DataTypes.STRING,
            allowNull:false
        },
        shortDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        sideBarDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        detailedDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        detailedDescription1:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    author.associate = function (models) {
        models.author.hasMany(models.blogs, { foreignKey: "AuthorId" });
      };
    return author;
}