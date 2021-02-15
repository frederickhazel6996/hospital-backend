let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./recordValidator');

Route.post(
    '/',
    authentication,
    validator.addRecordChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let {
                symptoms,
                patient_id,
                diagnosis,
                prescribed_drugs,
                admin_id
            } = req.body;

            let temporalId = `RECORD${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            await db.addRecord({
                record_id: temporalId,
                symptoms,
                admin_id,
                patient_id,
                diagnosis,
                prescribed_drugs
            });

            return res.status(201).send({ record_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
