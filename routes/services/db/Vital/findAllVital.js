let Vitals = require('../../../../models/vital');
module.exports = function () {
    return Vitals.query();
};
