let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./wardValidator');

Route.post(
    '/',
    authentication,
    validator.addWardChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { name, number_beds } = req.body;

            let temporalId = `WARD${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let ward = await db.findWard({ name: name.toLowerCase() });
            if (ward) return res.status(400).send('Ward Exists');
            await db.addWard({
                ward_id: temporalId,
                name,
                number_beds
            });

            res.status(201).send({ ward_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
