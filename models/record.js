const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

module.exports = class Record extends Model {
    static get tableName() {
        return 'record';
    }

    static get relationMappings() {
        return {
            patientRecordsChild: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/patient',
                join: {
                    from: 'record.patient_id',
                    to: 'patient.patient_id'
                }
            },
            adminRecords: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./admin'),
                join: {
                    from: 'record.admin_id',
                    to: 'admin.admin_id'
                }
            },
            vitalRecords: {
                relation: Model.HasOneRelation,
                modelClass: require('./vital'),
                join: {
                    from: 'record.record_id',
                    to: 'vitals.record_id'
                }
            }
        };
    }
};
