let Doctors = require('../../../../models/doctor');
module.exports = function (findargs, updateargs) {
    return Doctors.query().findOne(findargs).patch(updateargs);
};
