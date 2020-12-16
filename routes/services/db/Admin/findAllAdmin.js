let Admins = require('../../../../models/admin');
module.exports = function () {
    return Admins.query();
};
