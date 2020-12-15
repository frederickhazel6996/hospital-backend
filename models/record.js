const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Record extends Model {
    static get tableName() {
        return 'record';
    }

    static get relationMappings() {
        return {
            patientRecords: {
                relation: Model.BelongsToOneRelation,
                ModelClass: require('./patient'),
                join: {
                    from: 'record.patient_id',
                    to: 'patient.patient_id'
                }
            },
            doctorRecords: {
                relation: Model.BelongsToOneRelation,
                ModelClass: require('./doctor'),
                join: {
                    from: 'record.doctor_id',
                    to: 'patient.doctor_id'
                }
            }
        };
    }
}

module.exports = Record;
