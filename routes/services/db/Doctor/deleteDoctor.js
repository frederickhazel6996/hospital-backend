let Doctors = require('../../../../models/doctor');
module.exports = function (args) {
    return Doctors.query().delete().where(args);
};
