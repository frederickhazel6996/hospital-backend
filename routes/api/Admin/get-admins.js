let Route = require('express').Router();
let { validationResult } = require('express-validator');

Route.get('/', async function (req, res, next) {
    try {
        const db = dbService;

        let admins = await db.findAllAdmin();
        if (!admins) return res.status(400).send('Admins do not Exist');

        res.status(201).send(admins);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
