let Records = require('../../../../models/record');
module.exports = function (findargs, updateargs) {
    return Records.query().findOne(findargs).patch(updateargs);
};
