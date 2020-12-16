let Admins = require('../../../../models/admin');
module.exports = function (args) {
    return Admins.query().findOne(args);
};
