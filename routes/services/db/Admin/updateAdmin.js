let Admins = require('../../../../models/admin');
module.exports = function (findargs, updateargs) {
    return Admins.query().findOne(findargs).patch(updateargs);
};
