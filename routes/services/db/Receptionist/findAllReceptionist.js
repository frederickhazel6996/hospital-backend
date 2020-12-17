let Receptionist = require('../../../../models/receptionist');
module.exports = function () {
    return Receptionist.query();
};
