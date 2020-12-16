let Admins = require('../../../../models/admin');
module.exports = function (args) {
    return Admins.query().insert(args).returning('*').first();
};
