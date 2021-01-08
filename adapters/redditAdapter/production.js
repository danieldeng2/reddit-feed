const config = require("../../config");
const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = function RedditAdapter() {
	this.fetch = function (subreddit, sortBy, options) {
		const qs = querystring.encode(options);

		return fetch(`https://www.reddit.com/r/${subreddit}/${sortBy}/.json?${qs}`, {
			"headers": {
				"accept": "text/html,application/json",
				"accept-language": "en-CA,en;q=0.9",
				"user-agent": config.USER_AGENT,
			},
			"body": null,
			"method": "GET",
			"mode": "cors"
		}).then(res => res.json());

	}
};