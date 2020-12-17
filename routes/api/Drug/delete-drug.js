let Route = require('express').Router();
let { validationResult } = require('express-validator');

let authentication = require('../../services/middlewares/jwt');

Route.get('/:id', authentication, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { id: drugID } = req.params;

        const db = dbService;
        await db.deleteDrug({ id: drugID });

        res.status(201).send('Drug Deleted');
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
