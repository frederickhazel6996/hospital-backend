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
    check('name', 'Last Name should  not be empty').not().isEmpty().isString()
];

module.exports = { addAdminChecker };
