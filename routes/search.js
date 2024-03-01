const express=require('express');

const searchController = require('../controllers/search');

const routes= express();

routes.get('/', searchController.search)
// routes.get('/'||'/home', testController.get)
module.exports =routes;