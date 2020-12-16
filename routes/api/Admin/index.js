const adminRouter = require('express').Router();
adminRouter.use('/add-admin', require('./add-admin'));

module.exports = adminRouter;
