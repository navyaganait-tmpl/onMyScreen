const express = require("express");
const feedbackController = require("../controllers/feedback");
const routes = express.Router();

routes.post("/", feedbackController.postfeedback);

module.exports = routes;
