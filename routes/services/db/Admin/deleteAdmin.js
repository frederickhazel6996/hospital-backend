let Admins = require('../../../../models/admin');
module.exports = function (args) {
    return Admins.query().delete().where(args);
};
