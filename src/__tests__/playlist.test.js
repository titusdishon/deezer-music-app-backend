const request = require('supertest');

import { testApp } from '../app.js';

it('It returns a playlist when  limit set to 20  and index to 1 and valid id provided', async () => {
    const respCharts = await request(testApp)
        .get('/api/v1/charts?limit=20&index=1')
        .send()
        .expect(200);
    const assumedId = respCharts.body.playlists.data[0].id
    const response = await request(testApp)
        .get(`/api/v1/playlist?limit=20&index=1&id=${assumedId}`)
        .send()
        .expect(200);
    expect(typeof response.body.tracks.data).toBe('object');
});

it('Does not return any playlist when id is invalid', async () => {
    const resp = await request(testApp)
        .get('/api/v1/playlist?limit=20&index=1&id=2432432')
        .send()
   expect(resp.status).toBe(200);
   expect(resp.body.error.type).toBe('DataException');
});
