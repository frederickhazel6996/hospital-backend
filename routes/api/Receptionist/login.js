let Route = require('express').Router();
let bcrypt = require('bcryptjs');
let { validationResult } = require('express-validator');
let validator = require('./receptionistValidators');
let jwt = require('jsonwebtoken');

Route.post('/', validator.loginReceptionistChecker, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const db = dbService;

        let { username, password } = req.body;

        let receptionist = await db.findReceptionist({
            username: username.toLowerCase()
        });
        if (!receptionist)
            return res.status(400).send('Receptionist Does Not Exists');

        let user = {
            name: receptionist.first_name
        };
        let access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

        if (bcrypt.compareSync(password, receptionist.password) === true)
            return res.status(200).send({
                receptionist: receptionist,
                access_token: access_token
            });
        return res.status(400).send('Wrong Password or Username');
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
