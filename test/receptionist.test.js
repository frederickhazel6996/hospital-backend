/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const spawn = require('spawn-password');
const { setupDB, teardown } = require('./utils');

var receptionist_id;
var receptionist_username = faker.internet.email();
var receptionist_name = faker.name.firstName();
var receptionist_password = spawn.spawnAlphaNumericLength(20);
var api = '/api/receptionist';
beforeAll(async done => {
    await setupDB(knex);
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Add receptionist to database', async () => {
    await request(testapp)
        .post(`${api}/add-receptionist`)
        .send({
            username: receptionist_username,
            password: receptionist_password,
            name: receptionist_name
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            receptionist_id = response.body.receptionist_id;
        });
});
test('login receptionist to database', async () => {
    await request(testapp)
        .post(`${api}/login`)
        .send({
            username: receptionist_username,
            password: receptionist_password
        })
        .set('Accept', 'application/json')
        .expect(200);
});
test('Update receptionist', async () => {
    await request(testapp)
        .post(`${api}/update-receptionist`)
        .send({
            username: receptionist_username,
            password: receptionist_password,
            name: receptionist_name,
            receptionist_id: receptionist_id
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});

test('Get receptionists in database', async () => {
    await request(testapp)
        .get(`${api}/get-receptionists`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete receptionist from database', async () => {
    await request(testapp)
        .get(`${api}/delete-receptionist/${receptionist_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
