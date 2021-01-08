module.exports = function RedditAdapter() {
	const exampleResponses = {
		correctSubreddit: {
			kind: "Listing",
			dist: 2,
			data: {
				children: [
					{
						kind: "t3",
						data: {
							id: "abcd",
							score: 50,
							created_utc: 1000000.0,
							title: "first article",
							url: "https://www.reddit.com/",
							selftext: null,
						}
					},
					{
						kind: "t3",
						data: {
							id: "abcde",
							score: 51,
							created_utc: 1000001.0,
							title: "second article",
							url: "https://www.google.com/",
							selftext: "A giant search engine",
						}
					}
				]
			}
		},
		corruptSubreddit: {
			kind: "user",
			username: "hunter2"
		}
	};

	this.fetch = function (subreddit) {
		return new Promise(
			function (resolve, reject) {
				if (exampleResponses[subreddit])
					resolve(exampleResponses[subreddit]);
				else
					reject({ message: "Not Found", error: 404 });
			}
		);
	}
};