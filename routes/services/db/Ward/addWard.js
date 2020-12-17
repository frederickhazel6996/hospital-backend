let Wards = require('../../../../models/ward');
module.exports = function (args) {
    return Wards.query().insert(args).returning('*').first();
};
