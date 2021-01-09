import { render, screen } from '@testing-library/react';
import ArticleCard from './index';

const exampleArticles =
{
	key: "abcdef",
	score: 50,
	timestamp: 1627855044,
	title: "first article",
	link: "https://google.com",
	content: "a big search engine",
};

describe('ArticleCard', function () {
	beforeEach(() => {
		render(<ArticleCard
			key={exampleArticles.id}
			score={exampleArticles.score}
			time={exampleArticles.timestamp}
			title={exampleArticles.title}
			link={exampleArticles.link}
			content={exampleArticles.content}
		/>);
	});


	it('renders article title correctly', () => {
		const firstTitle = screen.getByText(/first article/i);
		expect(firstTitle).toBeInTheDocument();
	});

	it('renders article score correctly', () => {
		const score = screen.getByText(/50 Upvotes/i);
		expect(score).toBeInTheDocument();
	});

	it('renders article time correctly', () => {
		const timeString = new Date(1627855044 * 1000).toLocaleString();
		const timeText = screen.getByText(`${timeString} | 50 Upvotes`);
		expect(timeText).toBeInTheDocument();
	});

	it('renders article content correctly', () => {
		const content = screen.getByText("a big search engine");
		expect(content).toBeInTheDocument();
	});

	it('renders article link correctly', () => {
		const link = document.querySelector(`[href="${exampleArticles.link}"]`);
		expect(link).toBeInTheDocument();
	});

});
