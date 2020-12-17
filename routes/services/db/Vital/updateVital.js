let Vitals = require('../../../../models/vital');
module.exports = function (findargs, updateargs) {
    return Vitals.query().findOne(findargs).patch(updateargs);
};
