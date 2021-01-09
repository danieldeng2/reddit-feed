import { render, screen } from '@testing-library/react';
import ArticleList from './index';

const exampleArticles = [
	{
		id: "abcde",
		score: 100,
		time: 1000000,
		title: "first article",
		link: "https://reddit.com",
		content: null,
	},
	{
		id: "abcdef",
		score: 50,
		time: 1000000,
		title: "second article",
		link: "https://google.com",
		content: null,
	}
]

test('renders correct article list', () => {
	render(<ArticleList articles={exampleArticles} />);
	const firstTitle = screen.getByText(/first article/i);
	const secondTitle = screen.getByText(/second article/i);

	expect(firstTitle).toBeInTheDocument();
	expect(secondTitle).toBeInTheDocument();
});
