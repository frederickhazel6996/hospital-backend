let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./drugValidators');

Route.post(
    '/',
    authentication,
    validator.updateDrugChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { stock, drug_id } = req.body;

            let admin = await db.updateDrug(
                { drug_id: drug_id },
                {
                    stock
                }
            );
            if (admin) return res.status(201).send('Drug Updated');

            return res.status(501).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
