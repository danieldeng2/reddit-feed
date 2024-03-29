const redditAdapter = require("../adapters/redditAdapter");

module.exports = function FetchArticles() {
  const that = this;
  this.resolve = null;
  this.reject = null;
  const timeframeOptions = new Set([
    "hour",
    "day",
    "week",
    "month",
    "year",
    "all",
  ]);

  this.run = function (subreddit, timeframe, limit) {
    return new Promise((res, rej) => {
      that.resolve = res;
      that.reject = rej;
      validateRequest(subreddit, timeframe, limit);
      fetchArticleDetails(subreddit, timeframe, limit)
        .then(onSuccess)
        .catch(onFail);
    });
  };

  function fetchArticleDetails(subreddit, timeframe, limit) {
    const options = {
      t: timeframe || "day",
      limit: limit || 25,
    };
    return redditAdapter.fetch(subreddit, "top", options);
  }

  function onSuccess(rawResponse) {
    validateResponse(rawResponse);
    const response = rawResponse.data;
    that.resolve(parseResponse(response));
  }

  function onFail(error) {
    that.reject(error);
  }

  function parseResponse(response) {
    //Parse raw data to only return useful information
    const rawArticles = response.children;
    const articles = [];

    for (let rawArticle of rawArticles) {
      const articleData = rawArticle.data;
      const article = {
        id: articleData.id,
        score: articleData.score,
        timestamp: articleData.created_utc,
        title: articleData.title,
        link: articleData.url,
        content: articleData.selftext,
      };
      articles.push(article);
    }

    return {
      subreddit: rawArticles[0].data.subreddit,
      limit: response.dist,
      articles,
    };
  }

  function validateRequest(subreddit, timeframe, limit) {
    if (!subreddit)
      that.reject({ message: "Subreddit name must be provided", error: 400 });
    else if (limit && limit <= 0)
      that.reject({ message: "Limit must be greater than 0", error: 400 });
    else if (timeframe && !timeframeOptions.has(timeframe))
      that.reject({ message: "Timeframe invalid", error: 400 });
  }

  function validateResponse(rawResponse) {
    if (rawResponse.kind !== "Listing" || !rawResponse.data)
      that.reject({ message: "Unknown error", error: 404 });
    else if (!rawResponse.data.children)
      that.reject({ message: "Unknown error", error: 404 });
    else if (!rawResponse.data.children[0])
      that.reject({ message: "No articles found", error: 404 });
    else if (rawResponse.data.children[0].kind !== "t3")
      that.reject({ message: "Unknown error", error: 404 });
  }
};
