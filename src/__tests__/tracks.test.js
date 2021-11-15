const request = require('supertest');

import { testApp } from '../app.js';
it('It returns success on request with all params', async () => {
    const respCharts = await request(testApp)
        .get('/api/v1/charts?limit=20&index=1')
        .send()
    expect(typeof respCharts.body.playlists.data).toBe('object');
});

it('It returns an error when limit, index and id are not set', async () => {
    const response = await request(testApp)
        .get('/api/v1/playlist')
        .send()
    expect(response.status).toBe(400);

});
it('It returns success on request with all params for tracks of an artist', async () => {
    const respCharts = await request(testApp)
        .get('/api/v1/artist/tracks?limit=50?&index=1&id=123150472')
        .send()
    expect(typeof respCharts.body.data).toBe('object');
});
