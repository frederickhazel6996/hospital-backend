let Doctors = require('../../../../models/doctor');
module.exports = function () {
    return Doctors.query();
};
