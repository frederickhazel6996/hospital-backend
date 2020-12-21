let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', async function (req, res) {
    try {
        const db = dbService;

        let wards = await db.findAllWard();
        if (!wards) return res.status(400).send('Wards do not Exist');

        res.status(201).send(wards);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;