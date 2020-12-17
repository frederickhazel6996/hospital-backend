let Doctors = require('../../../../models/drug');
module.exports = function (args) {
    return Doctors.query().findOne(args);
};
