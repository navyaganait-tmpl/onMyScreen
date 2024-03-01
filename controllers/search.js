const Sequelize = require("sequelize");
const db = require("../database/models");
const blogs = require("../database/models/blogs");
module.exports = {
  search: async (req, res) => {
    try {
       let q = req.query.q;
    console.log(q);
    if (q != "") {
      let bgs = await db.blogs.findAll({
        where: { title: { [Sequelize.Op.iLike]: `%${q}%` } },
      });
      console.log(bgs)
      if (bgs !=[]) {
        return res.send(bgs);
        
      } else {
        res.status(200).send("No Match found");
      }
    } else {
      res.send([]);
    } 
    } catch (error) {
        console.log(error)
    }
    
  },
};
