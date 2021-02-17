let { check, query } = require('express-validator');
let addRecordChecker = [
    check('symptoms', 'Symptoms should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('admin_id', 'Admin ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('patient_id', 'Patient ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('diagnosis', 'Diagnosis should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('prescribed_drugs', 'Prescribed Drugs should  not be empty')
        .not()
        .isEmpty()
        .isString()
];
let updateRecordChecker = [
    check('symptoms', 'Symptoms should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('admin_id', 'Admin ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('patient_id', 'Patient ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('record_id', 'Record ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('diagnosis', 'Diagnosis should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('prescribed_drugs', 'Prescribed Drugs should  not be empty')
        .not()
        .isEmpty()
        .isString()
];

let fetchPatientRecordChecker = [
    query('patient_id', 'Patient should  not be empty')
        .not()
        .isEmpty()
        .isString()
];
module.exports = {
    addRecordChecker,
    updateRecordChecker,
    fetchPatientRecordChecker
};
