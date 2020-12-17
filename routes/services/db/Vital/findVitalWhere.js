let Vitals = require('../../../../models/vital');
module.exports = function (args) {
    return Vitals.query().where(args);
};
