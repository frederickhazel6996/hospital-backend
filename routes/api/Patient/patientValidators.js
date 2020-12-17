let { check, query } = require('express-validator');
let addPatientChecker = [
    check('first_name', 'First Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('last_name', 'Last Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('other_name', 'Other Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),

    check('sex', 'Sex should  not be empty').not().isEmpty().isString(),
    check('next_kin_name', 'Next of Kin Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('next_kin_relation', 'Next of Kin Relation should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('date_birth', 'Date of Birth should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('place_birth', 'Place of Birth should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('insurance_type', 'Insurance Type should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('added_by', 'Added By should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('age', 'Age should  not be empty').not().isEmpty().isNumeric(),
    check('phone_number', 'Phone Number should  not be empty')
        .not()
        .isEmpty()
        .isNumeric()
];
let updatePatientChecker = [
    check('first_name', 'First Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('last_name', 'Last Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('other_name', 'Other Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),

    check('sex', 'Sex should  not be empty').not().isEmpty().isString(),
    check('next_kin_name', 'Next of Kin Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('next_kin_relation', 'Next of Kin Relation should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('date_birth', 'Date of Birth should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('place_birth', 'Place of Birth should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('insurance_type', 'Insurance Type should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('added_by', 'Added By should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('patient_id', 'Patient ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('age', 'Age should  not be empty').not().isEmpty().isNumeric(),
    check('phone_number', 'Phone Number should  not be empty')
        .not()
        .isEmpty()
        .isNumeric()
];
module.exports = { updatePatientChecker, addPatientChecker };
