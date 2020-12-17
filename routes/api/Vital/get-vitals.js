let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let records = await db.findAllVital();
        if (!records) return res.status(400).send('Vitals do not Exist');

        res.status(201).send(records);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
