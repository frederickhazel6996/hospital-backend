let { check, query } = require('express-validator');
let addAdminChecker = [
    check('email', 'email should not be empty')
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
let updateAdminChecker = [
    check('email', 'email should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString(),
    check('admin_id', 'ID should  not be empty').not().isEmpty().isString(),
    check('name', 'Name should  not be empty').not().isEmpty().isString()
];
let loginAdminChecker = [
    check('email', 'email should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isEmail(),

    check('password', 'Password should  not be empty')
        .not()
        .isEmpty()
        .isString()
];

module.exports = { addAdminChecker, loginAdminChecker, updateAdminChecker };
