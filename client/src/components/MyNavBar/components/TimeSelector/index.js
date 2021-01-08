import NavDropdown from 'react-bootstrap/NavDropdown';

function TimeSelector(props) {
	return (
		<NavDropdown 
			title="Time " 
			id="basic-nav-dropdown" 
			className="mr-3"
			activeKey="all"
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
