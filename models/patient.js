const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

module.exports = class Patient extends Model {
    static get tableName() {
        return 'patient';
    }

    static get relationMappings() {
        return {
            patientRecords: {
                relation: Model.HasManyRelation,
                modelClass: require('./record'),
                join: {
                    from: 'patient.patient_id',
                    to: 'record.patient_id'
                }
            }
        };
    }
};
