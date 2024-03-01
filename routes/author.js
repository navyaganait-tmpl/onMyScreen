const express=require('express');

const getAuthorController = require('../controllers/author');

const routes= express();

routes.get('/', getAuthorController.getAuhtor)
module.exports =routes;