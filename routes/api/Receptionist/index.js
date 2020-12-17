const receptionistRouter = require('express').Router();

receptionistRouter.use('/add-receptionist', require('./add-receptionist'));
receptionistRouter.use('/get-receptionists', require('./get-receptionists'));
receptionistRouter.use(
    '/delete-receptionist',
    require('./delete-receptionist')
);
receptionistRouter.use(
    '/update-receptionist',
    require('./update-receptionist')
);
receptionistRouter.use('/login', require('./login'));

module.exports = receptionistRouter;
