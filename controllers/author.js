
const db = require("../database/models");
module.exports = {

  getAuhtor: async (req, res) => {

    try {
      
        const getAuth = await db.author.findOne();

        if (getAuth) {
          return res.status(400).send(getAuth)
        }
       else {
        res.status(400).send('No author found')
      }
    } catch (error) {
      console.log(error);
      return res.status(404).send(err.message)
    }

  }
}

