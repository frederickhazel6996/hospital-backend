let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./adminValidators');

Route.post(
    '/',
    authentication,
    validator.addAdminChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { email, password, name } = req.body;

            let temporalAdminId = `ADM${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let admin = await db.findAdmin({ username: email.toLowerCase() });
            if (admin) return res.status(400).send('Admin Exists');
            await db.addAdmin({
                admin_id: temporalAdminId,
                name: name,
                username: email.toLowerCase(),
                password: bcrypt.hashSync(password, bcrypt.genSaltSync())
            });

            res.status(201).send({ admin_id: temporalAdminId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
