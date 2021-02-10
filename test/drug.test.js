/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const { setupDB, teardown } = require('./utils');

var drug_id;
var drug_name = faker.lorem.word();
var api = '/api/drug';
beforeAll(async done => {
    await setupDB(knex);
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Add drug to database', async () => {
    await request(testapp)
        .post(`${api}/add-drug`)
        .send({
            name: drug_name,
            stock: 290,
            cost: 'GHC400',
            type_drug_2: 'Prescription',
            type_drug_1: 'Anti Depressant',
            dosage: '75mg',
            manufacturer: drug_name,
            warning: drug_name,
            uses: drug_name
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            drug_id = response.body.drug_id;
        });
});
test('Update drug in database', async () => {
    await request(testapp)
        .post(`${api}/update-drug`)
        .send({
            stock: 400,
            drug_id: drug_id
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});

test('Get drugs in database', async () => {
    await request(testapp)
        .get(`${api}/get-drugs`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete drug from database', async () => {
    await request(testapp)
        .get(`${api}/delete-drug/${drug_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
