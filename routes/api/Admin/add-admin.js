let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./adminValidators');
let jwt = require('jsonwebtoken');

Route.post(
    '/',
    authentication,
    validator.addAdminChecker,
    async function (req, res, next) {
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

            let admin = await db.findAdmin({ username: email });
            if (admin) return res.status(400).send('Admin Exists');
            await db.addAdmin({
                admin_id: temporalAdminId,
                name: name,
                username: email.toLowerCase(),

                password: bcrypt.hashSync(password, bcrypt.genSaltSync())
            });

            let user = {
                name: name
            };
            let access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.status(201).send({ name: name, access_token: access_token });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
