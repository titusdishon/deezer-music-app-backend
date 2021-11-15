const  request = require('supertest');

import { testApp } from '../app.js';
it('It returns success on request with all params', async () => {
    await request(testApp)
        .get('/api/v1/playlist?limit=20&index=1&id=3153080842')
        .send()
        .expect(200);
});
