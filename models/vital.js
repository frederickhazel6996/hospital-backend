const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Vital extends Model {
    static get tableName() {
        return 'vitals';
    }

    static get relationMappings() {
        return {
            patientVitals: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./record'),
                join: {
                    from: 'vitals.record_id',
                    to: 'record.record_id'
                }
            }
        };
    }
}

module.exports = Vital;
