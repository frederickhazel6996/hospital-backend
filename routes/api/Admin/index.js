const adminRouter = require('express').Router();
adminRouter.use('/add-admin', require('./add-admin'));
adminRouter.use('/update-admin', require('./update-admin'));
adminRouter.use('/login', require('./login'));
adminRouter.use('/get-admins', require('./get-admins'));
adminRouter.use('/delete-admin', require('./delete-admin'));

module.exports = adminRouter;
