/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const spawn = require('spawn-password');
const { setupDB, teardown } = require('./utils');
const { fake } = require('faker');

var patient_id;
var doctor_id;
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
var doctor_api = '/api/doctor';

var doctor_username = faker.internet.email();
var doctor_first_name = faker.name.firstName();
var doctor_last_name = faker.name.firstName();
var doctor_other_name = faker.name.firstName();
var doctor_password = spawn.spawnAlphaNumericLength(20);
var doctor_speciality = faker.lorem.word();
var doctor_age = 30;
var doctor_sex = 'MALE';

var api = '/api/record';

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

test('Add Test doctor to database', async () => {
    await request(testapp)
        .post(`${doctor_api}/add-doctor`)
        .send({
            username: doctor_username,
            password: doctor_password,
            first_name: doctor_first_name,
            last_name: doctor_last_name,
            other_name: doctor_other_name,
            speciality: doctor_speciality,
            age: doctor_age,
            sex: doctor_sex
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            doctor_id = response.body.doctor_id;
        });
});
test('Add record to database', async () => {
    await request(testapp)
        .post(`${api}/add-record`)
        .send({
            symptoms: faker.lorem.sentences(),
            doctor_id: doctor_id,
            patient_id: patient_id,
            diagnosis: faker.lorem.sentences(),
            prescribed_drugs: faker.lorem.sentence()
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            record_id = response.body.record_id;
        });
});

test('Get records in database', async () => {
    await request(testapp)
        .get(`${api}/get-records`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Get patient records', async () => {
    await request(testapp)
        .get(`${api}/get-patient-records`)
        .query({ patient_id: patient_id })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete records from database', async () => {
    await request(testapp)
        .get(`${api}/delete-record/${record_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
