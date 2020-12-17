let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./vitalValidator');

Route.get(
    '/',
    authentication,
    validator.fetchPatientVitalChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            let { patient_id } = req.query;
            const db = dbService;

            let records = await db.findVitalWhere({ patient_id: patient_id });
            if (!records)
                return res
                    .status(400)
                    .send('Patient Vitals Records do not Exist');

            res.status(201).send(records);
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
