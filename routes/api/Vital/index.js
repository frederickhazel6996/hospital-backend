const vitalRouter = require('express').Router();

vitalRouter.use('/add-vitals', require('./add-vitals'));
vitalRouter.use('/delete-vitals', require('./delete-vitals'));
vitalRouter.use('/get-vitals', require('./get-vitals'));
vitalRouter.use('/get-patient-vitals', require('./get-patient-vitals'));

module.exports = vitalRouter;
