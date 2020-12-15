const APIRouter = require('express').Router();

APIRouter.use('/admin', require('./Admin'));
// APIRouter.use('/prison', require('./Prison'));

module.exports = APIRouter;
