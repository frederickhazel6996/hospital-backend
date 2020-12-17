const doctorRouter = require('express').Router();

doctorRouter.use('/add-doctor', require('./add-doctor'));
doctorRouter.use('/get-doctors', require('./get-doctors'));
doctorRouter.use('/login', require('./login'));
doctorRouter.use('/delete-doctor', require('./delete-doctor'));
doctorRouter.use('/update-doctor', require('./update-doctor'));

module.exports = doctorRouter;
