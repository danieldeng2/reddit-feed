import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import SubredditBox from './components/SubredditBox';
import TimeSelector from './components/TimeSelector';
import LimitSelector from './components/LimitSelector';

function MyNavBar(props) {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Navbar.Brand href="/">Reddit Feed</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">

				<Nav className="mr-auto">
					<SubredditBox
						value={props.subreddit}
						onSubmit={props.setSubreddit}
					/>
				</Nav>

				<Nav>
					<TimeSelector
						onSelect={props.setTimeframe}
						value={props.timeframe}
					/>
					<LimitSelector
						onSelect={props.setLimit}
						value={props.limit}
					/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MyNavBar;
