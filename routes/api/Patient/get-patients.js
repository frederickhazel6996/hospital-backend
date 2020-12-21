let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let patients = await db.findAllPatient();
        if (!patients) return res.status(400).send('Patients do not Exist');

        res.status(200).send(patients);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
