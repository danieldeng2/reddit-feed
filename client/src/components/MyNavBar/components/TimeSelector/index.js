import NavDropdown from 'react-bootstrap/NavDropdown';

function TimeSelector(props) {

	const displayTexts = {
		"hour": "This Hour",
		"day": "Today",
		"week": "This Week",
		"month": "This Month",
		"year": "This Year",
		"all": "All",
	};

	return (
		<NavDropdown
			title={`${displayTexts[props.value]} `}
			className="mr-3"
			activeKey="all"
			id="time-selector"
			onSelect={props.onSelect}
		>
			<NavDropdown.Item eventKey="hour">This Hour</NavDropdown.Item>
			<NavDropdown.Item eventKey="day">Today</NavDropdown.Item>
			<NavDropdown.Item eventKey="week">This Week</NavDropdown.Item>
			<NavDropdown.Item eventKey="month">This Month</NavDropdown.Item>
			<NavDropdown.Item eventKey="year">This Year</NavDropdown.Item>
			<NavDropdown.Item eventKey="all">All</NavDropdown.Item>
		</NavDropdown>
	);
}

export default TimeSelector;
