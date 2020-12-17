let Receptionist = require('../../../../models/receptionist');
module.exports = function (args) {
    return Receptionist.query().findOne(args);
};
