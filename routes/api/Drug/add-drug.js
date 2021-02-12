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

            let {
                name,
                stock,
                cost,
                type_drug_1,
                type_drug_2,
                dosage,
                manufacturer,
                warning,
                uses
            } = req.body;

            let temporalId = `DRUG${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let drug = await db.findDrug({ name: name, dosage: dosage });
            if (drug) return res.status(400).send('Drug Exists');
            await db.addDrug({
                drug_id: temporalId,
                name,
                stock,
                cost,
                type_drug_1,
                type_drug_2,
                dosage,
                manufacturer,
                warning,
                uses
            });

            res.status(201).send({ drug_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
