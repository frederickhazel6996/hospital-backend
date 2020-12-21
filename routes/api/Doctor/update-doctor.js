let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./doctorValidators');

Route.post(
    '/',
    authentication,
    validator.updateDoctorChecker,
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
                sex,
                doctor_id
            } = req.body;

            let admin = await db.updateDoctor(
                { doctor_id: doctor_id },
                {
                    first_name,
                    last_name,
                    other_name,
                    speciality,
                    age,
                    sex,
                    username: username.toLowerCase(),
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync())
                }
            );
            if (admin) return res.status(201).send('Doctor Updated');

            return res.status(501).send('Update failed');
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
