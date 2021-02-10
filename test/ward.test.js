/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const { setupDB, teardown } = require('./utils');

var ward_id;
var ward_name = faker.lorem.word();

var api = '/api/ward';
beforeAll(async done => {
    await setupDB(knex);
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Add ward to database', async () => {
    await request(testapp)
        .post(`${api}/add-ward`)
        .send({
            name: ward_name,
            number_beds: 290,
            gender: 'Male'
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            ward_id = response.body.ward_id;
        });
});
test('Update ward in database', async () => {
    await request(testapp)
        .post(`${api}/update-ward`)
        .send({
            name: ward_name,
            number_beds: 400,
            ward_id: ward_id,
            gender: 'Female'
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});

test('Get wards in database', async () => {
    await request(testapp)
        .get(`${api}/get-wards`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete ward from database', async () => {
    await request(testapp)
        .get(`${api}/delete-ward/${ward_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
