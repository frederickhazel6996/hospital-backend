let { check } = require('express-validator');
let addReceptionistChecker = [
    check('username', 'username should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('name', 'Name should  not be empty').not().isEmpty().isString()
];
let updateReceptionistChecker = [
    check('username', 'username should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('receptionist_id', 'ID should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('name', 'Name should  not be empty').not().isEmpty().isString()
];
let loginReceptionistChecker = [
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

module.exports = {
    addReceptionistChecker,
    loginReceptionistChecker,
    updateReceptionistChecker
};
