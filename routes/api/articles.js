const router = require('express').Router();
const FetchArticles = require('../../services/fetchArticles');

router.route('/:subreddit').get((req, res) => {
	const subreddit = req.params.subreddit;
	const timeframe = req.query.timeframe;
	const limit = req.query.limit;

	new FetchArticles().run(subreddit, timeframe, limit).then(
		articles => res.status(200).json(articles)
	).catch(
		e => res.status(e.error || 404).json(e)
	);

});

module.exports = router;