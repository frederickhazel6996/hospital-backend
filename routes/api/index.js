const APIRouter = require('express').Router();

APIRouter.use('/admin', require('./Admin'));

module.exports = APIRouter;
