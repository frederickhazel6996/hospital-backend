let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./wardValidator');

Route.post(
    '/',
    authentication,
    validator.updateWardChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { name, number_beds, ward_id } = req.body;

            let admin = await db.updateWard(
                { ward_id: ward_id },
                {
                    name,
                    number_beds
                }
            );
            if (admin) return res.status(201).send('Ward Updated');

            return res.status(501).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
