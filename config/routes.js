const blogsRouter = require('../routes/blogs')
const feedbackRouter = require('../routes/feedback')
const searchRouter = require('../routes/search')
const getOneRouter = require('../routes/getOneBlog')
const getAuthorRouter = require('../routes/author')
const tagsRouter = require('../routes/tags')
const subscriberRouter=require('../routes/subscriber')

module.exports = function(app){

  console.log("TEST1");
  app.use('/blogs', blogsRouter);
  app.use('/blogs/feedback', feedbackRouter);
  app.use('/blogs/search', searchRouter);
  app.use('/blogs/getOne', getOneRouter);
  app.use('/blogs/about', getAuthorRouter);
  app.use('/blogs/tags', tagsRouter);
  app.use('/subscriber',subscriberRouter)
  

}