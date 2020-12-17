let Records = require('../../../../models/record');
module.exports = function (args) {
    return Records.query().insert(args).returning('*').first();
};
