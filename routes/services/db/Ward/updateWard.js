let Wards = require('../../../../models/ward');
module.exports = function (findargs, updateargs) {
    return Wards.query().findOne(findargs).patch(updateargs);
};
