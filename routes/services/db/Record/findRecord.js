let Records = require('../../../../models/record');
module.exports = function (args) {
    return Records.query().findOne(args);
};
