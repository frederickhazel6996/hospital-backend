/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../../app');
const knex = require('../../knex/knex');

let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2MDU1NjE2NDJ9.Jstn5TEKQqBe5xoGCWgoIxqAHF6_rfrWwFWDd0Xrjpo';

afterAll(async () => {
    // await teardownTestDatabase(knex);
    await knex.destroy();
});
test('Add drug to database', async () => {
    await request(testapp)
        .post('/api/drug/add-drug')
        .send({
            name: 'postinor 10',
            stock: 290
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(201);
});
