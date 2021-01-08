var Production = require('./production');
var Fake = require('./fake');

if (process.env.NODE_ENV == 'test') {
	global.__redditAdapter = global.__redditAdapter || new Production();
} else {
	global.__redditAdapter = global.__redditAdapter || new Production();
}

module.exports = global.__redditAdapter;