let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./doctorValidators');

Route.post(
    '/',
    authentication,
    validator.addDoctorChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;

            let {
                username,
                password,
                first_name,
                last_name,
                other_name,
                speciality,
                age,
                sex
            } = req.body;

            let temporalId = `DOC${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            let doctor = await db.findDoctor({
                username: username.toLowerCase()
            });
            if (doctor) return res.status(400).send('Doctor Exists');
            await db.addDoctor({
                doctor_id: temporalId,
                first_name,
                last_name,
                other_name,
                speciality,
                age,
                sex,
                username: username.toLowerCase(),

                password: bcrypt.hashSync(password, bcrypt.genSaltSync())
            });

            res.status(201).send({ doctor_id: temporalId });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
