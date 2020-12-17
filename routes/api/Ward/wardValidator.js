let { check } = require('express-validator');
let addWardChecker = [
    check('number_beds', 'Number of Beds should  not be empty')
        .not()
        .isEmpty()
        .isNumeric(),
    check('name', 'Name should  not be empty').not().isEmpty().isString()
];
let updateWardChecker = [
    check('number_beds', 'Number of Beds should  not be empty')
        .not()
        .isEmpty()
        .isNumeric(),
    check('name', 'Name should  not be empty').not().isEmpty().isString(),
    check('ward_id', 'Ward ID should  not be empty').not().isEmpty().isString()
];

module.exports = { addWardChecker, updateWardChecker };
