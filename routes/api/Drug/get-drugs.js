let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let drugs = await db.findAllDrug();
        if (!drugs) return res.status(400).send('Drugs do not Exist');

        return res.status(200).send(drugs);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
