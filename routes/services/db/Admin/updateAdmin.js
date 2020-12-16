let Admins = require('../../../../models/admin');
module.exports = function (args1, args2) {
    return Admins.query().findOne(args1).patch(args2);
};
