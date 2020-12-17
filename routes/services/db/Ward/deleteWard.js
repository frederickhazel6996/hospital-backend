let Wards = require('../../../../models/ward');
module.exports = function (args) {
    return Wards.query().delete().where(args);
};
