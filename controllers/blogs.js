
const db = require("../database/models");
const { response } = require("../routes/search");
const author = require("./author");
module.exports = {

  get: async(req, res) => {

    try {
      if (req.query!=""){
        let perPage = req.query.perPage || 10;
        let pageNo = req.query.pageNo || 1;
        perPage = parseInt(perPage);
        pageNo = parseInt(pageNo);
          let offset = (perPage* (pageNo-1))
          const bg = await db.blogs.findAll({
          offset:offset,
          limit:perPage,
          include: [{
            model: db.author
          }]
        });

        let totalBlogs = await db.blogs.findAll()
        totalBlogs = totalBlogs.length;
        const favMovieData=await db.favMovies.findAll();
        const ratingsData=await db.rating.findAll();
        const quoteData=await db.quote.findAll();

        let totalPages = []

        for (let i = 1; i <= Math.ceil(totalBlogs / perPage); i++) {
          totalPages.push(i);
        }

        if(bg){
          let response = {
            blogs: bg,
            favMovieData,
            ratingsData,
            quoteData,
            totalPages: totalPages
          }
          res.send(response)
        }
        
      }else{
          res.status(400).send('No Query Received')
      }
    } catch (error) {
      console.log(error);
    }
  
}
}

