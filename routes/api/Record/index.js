const recordRouter = require('express').Router();

recordRouter.use('/add-record', require('./add-record'));
recordRouter.use('/get-records', require('./get-records'));
recordRouter.use('/get-patient-records', require('./get-patient-records'));
recordRouter.use('/delete-record', require('./delete-record'));

module.exports = recordRouter;
