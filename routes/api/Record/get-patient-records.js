let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./recordValidator');

Route.get('/:id', authentication, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        let { id: patient_id } = req.params;
        const db = dbService;

        let records = await db.findRecordWhere({ patient_id: patient_id });
        if (!records)
            return res.status(400).send('Patient Records do not Exist');

        res.status(200).send(records);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
