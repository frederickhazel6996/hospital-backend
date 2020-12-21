let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let doctors = await db.findAllDoctor();
        if (!doctors) return res.status(400).send('Doctors do not Exist');

        res.status(200).send(doctors);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
