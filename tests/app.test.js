const request = require('supertest');
const app = require('../src/app');

describe('App Test', () => {
  it('should return hello world', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello DevOps World!');
  });
});