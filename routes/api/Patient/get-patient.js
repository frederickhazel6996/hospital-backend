let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;
        const { patient_id } = req.query;
        let patients = await db.findOnePatient({ patient_id: patient_id });
        if (!patients) return res.status(400).send('Patient does not Exist');

        res.status(200).send(patients);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
