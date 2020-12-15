const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Admin extends Model {
    static get tableName() {
        return 'admin';
    }
}

module.exports = Admin;
