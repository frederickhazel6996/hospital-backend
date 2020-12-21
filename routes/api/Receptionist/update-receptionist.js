let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./receptionistValidators');
let bcrypt = require('bcryptjs');

Route.post(
    '/',
    authentication,
    validator.updateReceptionistChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let { name, username, password, receptionist_id } = req.body;

            let receptionist = await db.updateReceptionist(
                { receptionist_id: receptionist_id },
                {
                    name,
                    username: username.toLowerCase(),
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync())
                }
            );
            if (receptionist)
                return res
                    .status(201)
                    .send({ receptionist_id: receptionist_id });

            return res.status(501).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
