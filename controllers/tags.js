const { or } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../database/models");
const blogs = require("../database/models/blogs");
module.exports = {
  tags: async (req, res) => {
    try {
      let tag = req.query.tag;
      console.log(tag);
      if (tag != "") {
        let T = await db.blogs.findAll({
          where: {tags: { [Sequelize.Op.iLike]: `%${tag}%`}}
        });
        console.log(T);
        if (T != []) {
          return res.status(200).send(T);
        } else {
          res.status(400).send("No Match found");
        }
      } else {
        res.send([]);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
