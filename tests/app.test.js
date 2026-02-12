const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
    test('GET / should return welcome message', async() => {
        const respond = await request(app).get('/');
        expect(respond.status).toBe(200);
        expect(respond.body.message).toBe('Hola, DevOps!');
    });

    test('GET /health should return OK status', async() => {
        const respond = await request(app).get('/health');
        expect(respond.status).toBe(200);
        expect(respond.body.status).toBe('OK');
    });
});