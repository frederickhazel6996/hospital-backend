const patientRouter = require('express').Router();

patientRouter.use('/add-patient', require('./add-patient'));
patientRouter.use('/get-patients', require('./get-patients'));
patientRouter.use('/delete-patient', require('./delete-patient'));
patientRouter.use('/update-patient', require('./update-patient'));

module.exports = patientRouter;
