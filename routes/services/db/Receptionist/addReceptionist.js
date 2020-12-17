let Receptionist = require('../../../../models/receptionist');
module.exports = function (args) {
    return Receptionist.query().insert(args).returning('*').first();
};
