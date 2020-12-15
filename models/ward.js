const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Ward extends Model {
    static get tableName() {
        return 'ward';
    }
}

module.exports = Ward;
