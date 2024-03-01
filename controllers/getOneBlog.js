const db = require("../database/models");
const Sequelize=require("sequelize")

module.exports = {
  getOne: async(req, res) => {

    try {
      let id=req.params.id;
      if (id!=""){
          const bg1 = await db.blogs.findOne({
            where: { id },
            include:[{
              model:db.author
            }]
        });
        if(bg1){
          res.send(bg1)
        }else{
          return res.status(400).send ('No blog with such id')
        }
        
      }
    } catch (error) {
      console.log(error);
      return res.status(404).send(err.message)
    }
  
}
}