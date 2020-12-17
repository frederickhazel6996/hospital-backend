let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');

Route.get('/:id', authentication, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { id: recordID } = req.params;

        const db = dbService;
        await db.deleteRecord({ id: recordID });

        res.status(201).send('Record Deleted');
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
