let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./patientValidators');
let moment = require('moment');

Route.post(
    '/',
    authentication,
    validator.addPatientChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let {
                first_name,
                last_name,
                other_name,
                age,
                sex,
                phone_number,
                added_by
            } = req.body;

            let temporalId = `PATIENT${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let patient = await db.findPatient({ phone_number: phone_number });
            if (patient)
                return res.status(400).send({ patient_id: temporalId });
            await db.addPatient({
                patient_id: temporalId,
                first_name,
                last_name,
                other_name,
                age,
                sex,
                phone_number,
                added_by,
                registration_date: moment().format('MMMM Do YYYY')
            });

            res.status(201).send({ patient_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
