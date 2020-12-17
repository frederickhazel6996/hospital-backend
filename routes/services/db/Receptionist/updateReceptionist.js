let Receptionist = require('../../../../models/receptionist');
module.exports = function (findargs, updateargs) {
    return Receptionist.query().findOne(findargs).patch(updateargs);
};
