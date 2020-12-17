let Records = require('../../../../models/record');
module.exports = function () {
    return Records.query();
};
