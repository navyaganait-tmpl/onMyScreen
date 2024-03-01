const express=require('express');

const getOneController = require('../controllers/getOneBlog');

const routes= express();

routes.get('/:id', getOneController.getOne)
module.exports =routes;