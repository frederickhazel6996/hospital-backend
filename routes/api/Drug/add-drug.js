let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./drugValidators');

Route.post(
    '/',
    authentication,
    validator.addDrugChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { name, stock } = req.body;

            let temporalId = `DRUG${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let drug = await db.findDrug({ name: name });
            if (drug) return res.status(400).send('Drug Exists');
            await db.addDrug({
                drug_id: temporalId,
                name,
                stock
            });

            res.status(201).send('Drug Added');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
