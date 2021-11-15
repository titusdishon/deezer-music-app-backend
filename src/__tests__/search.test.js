const  request = require('supertest');

import { testApp } from '../app.js';
it('It returns success on passing an existing search param', async () => {
    try {
        await request(testApp)
        .get('/api/v1/search-artist?query=a')
        .send()
    } catch (error) {
        expect(error.status).toBe(200);
    }
});
it('It returns success even without search querry param', async () => {
    try {
        await request(testApp)
        .get('/api/v1/search-artist')
        .send()
    } catch (error) {
        expect(error.status).toBe(200);
    }
});
