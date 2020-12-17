let Wards = require('../../../../models/ward');
module.exports = function () {
    return Wards.query();
};
