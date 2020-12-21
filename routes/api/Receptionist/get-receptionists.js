let Route = require('express').Router();
let authentication = require('../../services/middlewares/jwt');

Route.get('/', authentication, async function (req, res) {
    try {
        const db = dbService;

        let receptionist = await db.findAllReceptionist();
        if (!receptionist)
            return res.status(400).send('Receptionists do not Exist');

        res.status(200).send(receptionist);
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
