const request = require('supertest');
const app = require('../app');
test('GET /api/data', async () => {
  const res = await request(app).get('/api/data');
  expect(res.statusCode).toBe(200);
});
