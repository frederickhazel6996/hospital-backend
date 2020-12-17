let Route = require('express').Router();
let { validationResult } = require('express-validator');
let authentication = require('../../services/middlewares/jwt');

Route.get('/:id', authentication, async function (req, res) {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { id: wardID } = req.params;

        const db = dbService;
        await db.deleteWard({ id: wardID });

        res.status(201).send('Ward Deleted');
    } catch (e) {
        return res.status(500);
    }
});

module.exports = Route;
