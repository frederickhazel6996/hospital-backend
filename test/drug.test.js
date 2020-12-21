/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const { setupDB, teardown } = require('./utils');

var drug_id;
var drug_name = faker.lorem.word();

beforeAll(async done => {
    await setupDB(knex);
    await request(testapp)
        .post('/api/drug/add-drug')
        .send({
            name: drug_name,
            stock: 290
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .then(response => {
            drug_id = response.body.drug_id;
        });
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Update drug in database', async () => {
    await request(testapp)
        .post('/api/drug/update-drug')
        .send({
            name: drug_name,
            stock: 400,
            drug_id: drug_id
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Get drugs in database', async () => {
    await request(testapp)
        .get('/api/drug/get-drugs')
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete drug from database', async () => {
    console.log(drug_id);
    await request(testapp)
        .get(`/api/drug/delete-drug/${drug_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
