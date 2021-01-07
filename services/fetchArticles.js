require('rootpath')();
const redditAdapter = require('adapters/redditAdapter');

module.exports = function FetchArticles() {
	const that = this;
	this.resolve = null;
	this.reject = null;
	this.response = null;

	this.run = function (subreddit, timeframe, limit) {
		return new Promise(
			(res, rej) => {
				that.resolve = res;
				that.reject = rej;
				validateRequest();
				fetchArticleDetails(subreddit, timeframe, limit).then(onSuccess, onFail);
			}
		)
	}

	function fetchArticleDetails(subreddit, timeframe, limit) {
		const options = {
			t: timeframe || "day",
			limit: limit || 25,
		};
		return redditAdapter.fetch(subreddit, "top", options);
	}

	function onSuccess(rawResponse) {
		that.response = rawResponse;
		validateResponse();
		that.resolve(parseResponse());
	}

	function onFail(error) {
		that.reject(error);
	}

	function validateRequest() {
	}


	function validateResponse() {
	}


	function parseResponse() {
		return this.response;
	}

}