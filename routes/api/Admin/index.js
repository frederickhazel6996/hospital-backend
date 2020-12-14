const adminRouter = require('express').Router();
adminRouter.use('/register', require('./register'));

module.exports = adminRouter;
