import NavDropdown from 'react-bootstrap/NavDropdown';

function LimitSelector(props) {
	return (
		<NavDropdown
			title="Limit "
			id="basic-nav-dropdown"
			className="mr-3"
			activeKey={25}
			onSelect={props.onSelect}
		>
			<NavDropdown.Item eventKey={5}>5</NavDropdown.Item>
			<NavDropdown.Item eventKey={10}>10</NavDropdown.Item>
			<NavDropdown.Item eventKey={15}>15</NavDropdown.Item>
			<NavDropdown.Item eventKey={25}>25</NavDropdown.Item>
			<NavDropdown.Item eventKey={50}>50</NavDropdown.Item>
		</NavDropdown>
	);
}

export default LimitSelector;
