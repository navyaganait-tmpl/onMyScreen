const express=require('express');

const tagsController = require('../controllers/tags');

const routes= express();

routes.get('/', tagsController.tags)
module.exports =routes;