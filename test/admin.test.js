/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../app');
const knex = require('../knex/knex');
const faker = require('faker');
const spawn = require('spawn-password');
const { setupDB, teardown } = require('./utils');

var admin_id;
var admin_email = faker.internet.email();
var admin_name = faker.name.firstName();
var admin_password = spawn.spawnAlphaNumericLength(20);
var api = '/api/admin';
beforeAll(async done => {
    await setupDB(knex);
    done();
});

afterAll(async done => {
    await teardown(knex);
    await knex.destroy();
    done();
});

test('Add admin to database', async () => {
    await request(testapp)
        .post(`${api}/add-admin`)
        .send({
            email: admin_email,
            password: admin_password,
            name: admin_name
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            admin_id = response.body.admin_id;
        });
});
test('login admin to database', async () => {
    await request(testapp)
        .post(`${api}/login`)
        .send({
            email: admin_email,
            password: admin_password
        })
        .set('Accept', 'application/json')
        .expect(200);
});
test('Update Admin', async () => {
    await request(testapp)
        .post(`${api}/update-admin`)
        .send({
            email: admin_email,
            password: admin_password,
            name: admin_name,
            admin_id: admin_id
        })
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});

test('Get admins in database', async () => {
    await request(testapp)
        .get(`${api}/get-admins`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(200);
});

test('Delete admin from database', async () => {
    await request(testapp)
        .get(`${api}/delete-admin/${admin_id}`)
        .set('Authorization', `Bearer ${process.env.TEST_TOKEN}`)
        .set('Accept', 'application/json')
        .expect(201);
});
