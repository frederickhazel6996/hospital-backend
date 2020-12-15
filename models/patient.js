const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Patient extends Model {
    static get tableName() {
        return 'patient';
    }

    static get relationMappings() {
        return {
            patientRecords: {
                relation: Model.HasManyRelation,
                ModelClass: require('./record'),
                join: {
                    from: 'patient.patient_id',
                    to: 'record.patient_id'
                }
            },
            patientVitals: {
                relation: Model.HasManyRelation,
                ModelClass: require('./vital'),
                join: {
                    from: 'patient.patient_id',
                    to: 'vitals.patient_id'
                }
            }
        };
    }
}

module.exports = Patient;
