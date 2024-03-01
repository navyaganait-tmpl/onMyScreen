const express=require('express');

const subscriberController = require('../controllers/subscriber');

const routes= express();

routes.post('/', subscriberController.subscriberData)
module.exports =routes;