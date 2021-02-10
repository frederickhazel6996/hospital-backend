/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const spawn = require('spawn-password');
const { setupDB, teardown } = require('./utils');

var doctor_id;
var doctor_username = faker.internet.email();
var doctor_first_name = faker.name.firstName();
var doctor_last_name = faker.name.firstName();
var doctor_other_name = faker.name.firstName();
var doctor_password = spawn.spawnAlphaNumericLength(20);
var doctor_speciality = faker.lorem.word();
var doctor_age = 30;
var doctor_sex = 'MALE';
var api = '/api/doctor';

beforeAll(async done => {
    await setupDB(knex);
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Add doctor to database', async () => {
    await request(testapp)
        .post(`${api}/add-doctor`)
        .send({
            username: doctor_username,
            password: doctor_password,
            first_name: doctor_first_name,
            last_name: doctor_last_name,
            other_name: doctor_other_name,
            speciality: doctor_speciality,
            age: doctor_age,
            sex: doctor_sex,
            phone_number: '0238489283'
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            doctor_id = response.body.doctor_id;
        });
});
test('Login Doctor', async () => {
    await request(testapp)
        .post(`${api}/login`)
        .send({
            username: doctor_username,
            password: doctor_password
        })
        .set('Accept', 'application/json')
        .expect(200);
});

test('Get doctors in database', async () => {
    await request(testapp)
        .get(`${api}/get-doctors`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Update doctor', async () => {
    await request(testapp)
        .post(`${api}/update-doctor`)
        .send({
            doctor_id: doctor_id,
            username: doctor_username,
            password: doctor_password,
            first_name: doctor_first_name,
            last_name: doctor_last_name,
            other_name: doctor_other_name,
            speciality: doctor_speciality,
            age: doctor_age,
            sex: doctor_sex,
            phone_number: '0238489283'
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});

test('Delete doctor from database', async () => {
    await request(testapp)
        .get(`${api}/delete-doctor/${doctor_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
