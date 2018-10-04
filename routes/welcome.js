const express = require('express')
const welcomeRouter = express.Router();
const cotactUsController = require('../controllers/cotactUsController')
const aboutController = require('../controllers/aboutController')


welcomeRouter.get("/contactUs",cotactUsController)

welcomeRouter.get("/about",aboutController)

module.exports = welcomeRouter;