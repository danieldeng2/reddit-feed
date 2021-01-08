const request = require('supertest');
const app = require('../app');

describe('Node Environment', () => {
	it('should have test environment enabled', () => {
		expect(process.env.NODE_ENV).toBe('test')
	})
})

describe("Test the Article endpoint", () => {
	test("It should response the GET method", () => {
		return request(app)
			.get("/api/articles/all")
			.then(response => {
				expect(response.statusCode).toBe(200);
			});
	});

	test("It should produce error if no subreddit given", () => {
		return request(app)
			.get("/api/articles/")
			.then(response => {
				expect(response.statusCode).toBe(404);
			});
	});

	test("It should produce error if subreddit does not exist", () => {
		return request(app)
			.get("/api/articles/anExampleOfaSubredditThatDoesNotExist")
			.then(response => {
				expect(response.statusCode).toBe(404);
			});
	});

});