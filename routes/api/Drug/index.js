const drugRouter = require('express').Router();

drugRouter.use('/add-drug', require('./add-drug'));
drugRouter.use('/get-drugs', require('./get-drugs'));
drugRouter.use('/delete-drug', require('./delete-drug'));
drugRouter.use('/update-drug', require('./update-drug'));

module.exports = drugRouter;
