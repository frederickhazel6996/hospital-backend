let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./patientValidators');

Route.post(
    '/',
    authentication,
    validator.updatePatientChecker,
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
                next_kin_name,
                next_kin_relation,
                date_birth,
                place_birth,
                insurance_type,
                added_by,
                patient_id
            } = req.body;

            let admin = await db.updatePatient(
                { patient_id: patient_id },
                {
                    first_name,
                    last_name,
                    other_name,
                    age,
                    sex,
                    phone_number,
                    next_kin_name,
                    next_kin_relation,
                    date_birth,
                    place_birth,
                    insurance_type,
                    added_by,
                    patient_id
                }
            );
            if (admin) return res.status(400).send('Patient Updated');

            return res.status(201).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
