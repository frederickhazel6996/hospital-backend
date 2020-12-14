const APIRouter = require('express').Router();

APIRouter.use('/admin', require('./Admin'));
// APIRouter.use('/prison', require('./Prison'));

console.log('UK E commerce');
module.exports = APIRouter;
