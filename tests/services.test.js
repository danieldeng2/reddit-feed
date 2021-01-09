const FetchArticles = require('../services/fetchArticles');

describe("Test the fetchArticles service", () => {

	it("parses responses correctly", () => {
		return new FetchArticles()
			.run("correctSubreddit", "day", 25)
			.then(
				data => {
					expect(data.subreddit).toBe("correctSubreddit");
					expect(data.articles.length).toBe(2);
					expect(data.articles[0].title).toBe("first article");
					expect(data.articles[1].id).toBe("abcde");
				}
			);
	});

	it("parses responses correctly with timeframe unspecified", () => {
		return new FetchArticles()
			.run("correctSubreddit", undefined, 25)
			.then(
				data => {
					expect(data.subreddit).toBe("correctSubreddit");
					expect(data.articles.length).toBe(2);
					expect(data.articles[0].title).toBe("first article");
					expect(data.articles[1].id).toBe("abcde");
				}
			);
	});

	it("parses responses correctly with limit unspecified", () => {
		return new FetchArticles()
			.run("correctSubreddit", "day", undefined)
			.then(
				data => {
					expect(data.subreddit).toBe("correctSubreddit");
					expect(data.articles.length).toBe(2);
					expect(data.articles[0].title).toBe("first article");
					expect(data.articles[1].id).toBe("abcde");
				}
			);
	});

	it("fails gracefully if no subreddit name provided", () => {
		const fetchArticles = new FetchArticles().run(null, "day", 25);
		return expect(fetchArticles)
			.rejects
			.toHaveProperty("message", "Subreddit name must be provided");
	});

	it("fails gracefully if limit is less than zero", () => {
		const fetchArticles = new FetchArticles().run("correctSubreddit", "day", -1);
		return expect(fetchArticles)
			.rejects
			.toHaveProperty("message", "Limit must be greater than 0");
	});

	it("fails gracefully if timeframe is invalid", () => {
		const fetchArticles = new FetchArticles().run("correctSubreddit", "nanosecond", 25);
		return expect(fetchArticles)
			.rejects
			.toHaveProperty("message", "Timeframe invalid");
	});

	it("handles responses that are incorrect", () => {
		const fetchArticles = new FetchArticles().run("corruptSubreddit", "day", 25);
		return expect(fetchArticles)
			.rejects
			.toHaveProperty("error", 404);
	});

});