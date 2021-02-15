let { check, query } = require('express-validator');
let addDoctorChecker = [
    check('username', 'username should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('first_name', 'First Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('last_name', 'Last Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('speciality', 'Specialty should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('sex', 'Sex should  not be empty').not().isEmpty().isString(),
    check('age', 'age should  not be empty').not().isEmpty().isNumeric()
];
let updateDoctorChecker = [
    check('username', 'username should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('first_name', 'First Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('last_name', 'Last Name should  not be empty')
        .not()
        .isEmpty()
        .isString(),

    check('speciality', 'Specialty should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('sex', 'Sex should  not be empty').not().isEmpty().isString(),
    check('doctor_id', 'Doctor ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('age', 'age should  not be empty').not().isEmpty().isNumeric()
];
let loginDoctorChecker = [
    check('username', 'username should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString()
];

module.exports = { loginDoctorChecker, updateDoctorChecker, addDoctorChecker };
