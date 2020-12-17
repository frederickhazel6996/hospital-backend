let Drugs = require('../../../../models/drug');
module.exports = function () {
    return Drugs.query();
};
