import './App.css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import React, { useState, useEffect } from 'react';

import MyNavBar from './MyNavBar';
import ErrorAlert from './ErrorAlert';
import ArticleList from './ArticleList';
import LoadingScreen from './LoadingScreen';


function App() {
	// data set by user
	const [subreddit, setSubreddit] = useState("");
	const [timeframe, setTimeframe] = useState("all");
	const [limit, setLimit] = useState(25);


	// data returned by api
	const [articles, setArticles] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [showError, setShowError] = useState(false);
	const [isDone, setIsDone] = useState(false);

	useEffect(() => {

		setIsDone(false);

		// Default to r/all if no subreddit specified
		const subString = subreddit !== "" ? subreddit : "all";

		fetch(`http://localhost:5000/api/articles/${subString}?timeframe=${timeframe}&limit=${limit}`).then(
			res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Something went wrong. ');
				}
			}
		).then(
			data => {
				setShowError(false);
				setIsDone(true);
				setArticles(data.articles);
			}
		).catch(
			error => {
				setShowError(true);
				setIsDone(false);
				setErrorMessage(error.message);
				setArticles([]);
			}
		)
	},
		[subreddit, timeframe, limit]);

	return (
		<>
			<MyNavBar
				subreddit={subreddit}
				timeframe={timeframe}
				limit={limit}
				setSubreddit={setSubreddit}
				setTimeframe={setTimeframe}
				setLimit={setLimit}
			/>
			<Container className="p-3">
				<ErrorAlert show={showError} message={errorMessage} />
				{!isDone && <LoadingScreen />}
				{isDone && <ArticleList articles={articles} />}
			</Container>
		</>
	);
}

export default App;
