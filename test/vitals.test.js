/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const { setupDB, teardown } = require('./utils');

var vitals_id;
var vital_weight = 65;
var vital_height = 200;
var vital_temperature = 35;
var vital_blood_pressure = 100;
var patient_id;
var patient_first_name = faker.name.firstName();
var patient_last_name = faker.name.firstName();
var patient_other_name = faker.name.firstName();
var patient_age = 30;
var patient_sex = 'MALE';
var patient_number = faker.phone.phoneNumber();
var patient_dob = faker.date.past();
var patient_pob = faker.address.city();
var insurance_type = faker.lorem.word();
var patient_added_by = faker.name.lastName();
var next_kin_name = faker.name.lastName();
var next_kin_relation = faker.lorem.word();
var patient_api = '/api/patient';

var api = '/api/vital';
beforeAll(async () => {
    await setupDB(knex);
});

afterAll(async () => {
    await teardown(knex);
    await knex.destroy();
});

test('Add Test Patient', async () => {
    await request(testapp)
        .post(`${patient_api}/add-patient`)
        .send({
            first_name: patient_first_name,
            last_name: patient_last_name,
            other_name: patient_other_name,
            age: patient_age,
            sex: patient_sex,
            phone_number: patient_number,
            next_kin_name: next_kin_name,
            next_kin_relation: next_kin_relation,
            date_birth: patient_dob,
            place_birth: patient_pob,
            insurance_type: insurance_type,
            added_by: patient_added_by
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            patient_id = response.body.patient_id;
        });
});
test('Add vitals to database', async () => {
    await request(testapp)
        .post(`${api}/add-vitals`)
        .send({
            weight: vital_weight,
            height: vital_height,
            temperature: vital_temperature,
            blood_pressure: vital_blood_pressure,
            patient_id: patient_id
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            vitals_id = response.body.vitals_id;
        });
});

test('Get vitals in database', async () => {
    await request(testapp)
        .get(`${api}/get-vitals`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Get patient vitals', async () => {
    await request(testapp)
        .get(`${api}/get-patient-vitals`)
        .query({ patient_id: patient_id })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete vitals from database', async () => {
    await request(testapp)
        .get(`${api}/delete-vitals/${vitals_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
