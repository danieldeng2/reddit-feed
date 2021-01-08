import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function MyNavBar() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Reddit Feed</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">

					<Nav className="mr-auto">
						<Form inline>
							<FormControl type="text" placeholder="Subreddit" className="mr-lg-2" />
						</Form>
					</Nav>

					<Nav>
						<NavDropdown title="Time " id="basic-nav-dropdown" className="mr-3">
							<NavDropdown.Item>This Hour</NavDropdown.Item>
							<NavDropdown.Item>Today</NavDropdown.Item>
							<NavDropdown.Item>This Week</NavDropdown.Item>
							<NavDropdown.Item>This Month</NavDropdown.Item>
							<NavDropdown.Item>This Year</NavDropdown.Item>
							<NavDropdown.Item>All</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title="Limit " id="basic-nav-dropdown" className="mr-3">
							<NavDropdown.Item>5</NavDropdown.Item>
							<NavDropdown.Item>10</NavDropdown.Item>
							<NavDropdown.Item>15</NavDropdown.Item>
							<NavDropdown.Item>25</NavDropdown.Item>
							<NavDropdown.Item>50</NavDropdown.Item>
						</NavDropdown>
					</Nav>


				</Navbar.Collapse>
			</Navbar>

		</>
	);
}

export default MyNavBar;
