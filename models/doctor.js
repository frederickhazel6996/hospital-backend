const { Model } = require('objection');
const knex = require('../knex/knex');

Model.knex(knex);

class Doctor extends Model {
    static get tableName() {
        return 'doctor';
    }

    static get relationMappings() {
        return {
            doctorPatients: {
                relation: Model.HasManyRelation,
                modelClass: require('./record'),
                join: {
                    from: 'doctor.patient_id',
                    to: 'record.patient_id'
                }
            }
        };
    }
}

module.exports = Doctor;
