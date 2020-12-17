let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let validator = require('./doctorValidators');
let jwt = require('jsonwebtoken');

Route.post('/', validator.loginDoctorChecker, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const db = dbService;

        let { username, password } = req.body;

        let doctor = await db.findDoctor({ username: username });
        if (!doctor) return res.status(400).send('Admin Does Not Exists');

        let user = {
            name: doctor.first_name
        };
        let access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

        if (bcrypt.compareSync(password, doctor.password) === true)
            return res.status(201).send({
                doctor: doctor,
                access_token: access_token
            });
        return res.status(400).send('Wrong Password or Username');
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
