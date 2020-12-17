const wardRouter = require('express').Router();

wardRouter.use('/add-ward', require('./add-ward'));
wardRouter.use('/get-wards', require('./get-wards'));
wardRouter.use('/delete-ward', require('./delete-ward'));
wardRouter.use('/update-ward', require('./update-ward'));

module.exports = wardRouter;
