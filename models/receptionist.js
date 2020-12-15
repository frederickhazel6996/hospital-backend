const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Receptionist extends Model {
    static get tableName() {
        return 'receptionist';
    }
}

module.exports = Receptionist;
