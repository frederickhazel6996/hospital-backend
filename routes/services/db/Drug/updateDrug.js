let Drugs = require('../../../../models/drug');
module.exports = function (findargs, updateargs) {
    return Drugs.query().findOne(findargs).patch(updateargs);
};
