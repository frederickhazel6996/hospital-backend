let { check } = require('express-validator');
let addDrugChecker = [
    check('stock', 'Stock should  not be empty').not().isEmpty().isString(),
    check('name', 'Name should  not be empty').not().isEmpty().isString()
];
let updateDrugChecker = [
    check('stock', 'Stock should  not be empty').not().isEmpty().isString(),
    check('drug_id', 'Drug ID should  not be empty').not().isEmpty().isString()
];

module.exports = { addDrugChecker, updateDrugChecker };
