const APIRouter = require('express').Router();

APIRouter.use('/admin', require('./Admin'));
APIRouter.use('/doctor', require('./Doctor'));
APIRouter.use('/drug', require('./Drug'));
APIRouter.use('/patient', require('./Patient'));
APIRouter.use('/receptionist', require('./Receptionist'));
APIRouter.use('/record', require('./Record'));
APIRouter.use('/vital', require('./Vital'));
APIRouter.use('/ward', require('./ward'));

module.exports = APIRouter;
