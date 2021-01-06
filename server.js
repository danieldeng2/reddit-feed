const express = require('express');
const path = require('path');
const cors = require('cors');
const articlesRouter = require('./routes/api/articles');

const app = express();
require('dotenv').config();

// Middleware for express.js
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up API handling
app.use('/api/articles', articlesRouter);

// Use build files from client if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (_, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
})
