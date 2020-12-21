let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./vitalValidator');
let moment = require('moment');

Route.post(
    '/',
    authentication,
    validator.addVitalChecker,
    async function (req, res) {
        try {
            req.body.patient_id;
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let {
                weight,
                height,
                temperature,
                blood_pressure,
                patient_id
            } = req.body;

            let temporalId = `VITALS${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            await db.addVital({
                vital_id: temporalId,
                weight,
                height,
                temperature,
                blood_pressure,
                patient_id,
                checkin_date: moment().format('MMMM Do YYYY')
            });

            return res.status(201).send({ vital_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
