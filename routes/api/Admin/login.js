let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./adminValidators');
let jwt = require('jsonwebtoken');

Route.post(
    '/',

    validator.loginAdminChecker,
    async function (req, res, next) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { email, password } = req.body;

            let admin = await db.findAdmin({ username: email });
            if (!admin) return res.status(400).send('Admin Does Not Exists');

            let user = {
                name: admin.name
            };
            let access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

            if (bcrypt.compareSync(password, admin.password) === true)
                return res.status(201).send({
                    name: admin.name,
                    access_token: access_token
                });
            return res.status(400).send('Wrong Password or Username');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
