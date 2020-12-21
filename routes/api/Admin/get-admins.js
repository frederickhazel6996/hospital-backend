let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');
Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let admins = await db.findAllAdmin();
        if (!admins) return res.status(400).send('Admins do not Exist');

        res.status(200).send(admins);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
