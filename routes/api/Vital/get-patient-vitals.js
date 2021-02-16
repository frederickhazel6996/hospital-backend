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
            let { record_id } = req.query;
            console.log(record_id);
            const db = dbService;

            let records = await db.findVitalWhere({ record_id: record_id });
            if (!records)
                return res
                    .status(400)
                    .send('Patient Vitals Records do not Exist');

            return res.status(200).send(records);
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
