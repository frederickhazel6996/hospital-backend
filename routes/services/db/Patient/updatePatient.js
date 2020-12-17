let Patients = require('../../../../models/patient');
module.exports = function (findargs, updateargs) {
    return Patients.query().findOne(findargs).patch(updateargs);
};
