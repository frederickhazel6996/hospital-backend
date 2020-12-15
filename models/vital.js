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
                ModelClass: require('./patient'),
                join: {
                    from: 'vitals.patient_id',
                    to: 'patient.patient_id'
                }
            }
        };
    }
}

module.exports = Vital;
