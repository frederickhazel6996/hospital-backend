let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./adminValidators');

Route.post(
    '/',
    authentication,
    validator.updateAdminChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { email, password, name, admin_id } = req.body;

            let admin = await db.updateAdmin(
                { admin_id: admin_id },
                {
                    username: email.toLowerCase(),
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
                    name: name
                }
            );
            if (admin) return res.status(201).send('Admin Updated');

            return res.status(501).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
