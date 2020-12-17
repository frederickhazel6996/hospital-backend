let { check, query } = require('express-validator');
let addVitalChecker = [
    check('weight', 'Weight should  not be empty').not().isEmpty().isString(),
    check('height', 'Height should  not be empty').not().isEmpty().isString(),
    check('temperature', 'Temperature should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('blood_pressure', 'Blood Pressure should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('patient_id', 'Patient ID should  not be empty')
        .not()
        .isEmpty()
        .isString()
];

let fetchPatientVitalChecker = [
    query('patient_id', 'Patient ID should not be empty')
        .not()
        .isEmpty()
        .isString()
];
module.exports = {
    addVitalChecker,
    fetchPatientVitalChecker
};
