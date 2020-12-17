let Drugs = require('../../../../models/drug');
module.exports = function (args) {
    return Drugs.query().insert(args).returning('*').first();
};
