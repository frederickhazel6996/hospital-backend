const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Drug extends Model {
    static get tableName() {
        return 'drug';
    }
}

module.exports = Drug;
