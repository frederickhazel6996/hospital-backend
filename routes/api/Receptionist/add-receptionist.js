let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./receptionistValidators');
let bcrypt = require('bcryptjs');

Route.post(
    '/',
    authentication,
    validator.addReceptionistChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { name, username, password } = req.body;

            let temporalId = `RECEP${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let receptionist = await db.findReceptionist({
                username: username.toLowerCase()
            });
            if (receptionist)
                return res.status(400).send('Receptionist Exists');
            await db.addReceptionist({
                receptionist_id: temporalId,
                name,
                username: username.toLowerCase(),
                password: bcrypt.hashSync(password, bcrypt.genSaltSync())
            });

            res.status(201).send('Receptionist Added');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
