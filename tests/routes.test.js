const request = require('supertest');
const app = require('../app');

describe('Node Environment', () => {
	it('should have test environment enabled', () => {
		expect(process.env.NODE_ENV).toBe('test')
	})
})

describe('Article Endpoint', () => {
	it('should respond to get request', async () => {
		const res = await request(app)
			.get('/api/articles/all')
			.send();
		expect(res.statusCode).toEqual(200);
	})


})
