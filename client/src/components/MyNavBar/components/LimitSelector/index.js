import NavDropdown from "react-bootstrap/NavDropdown";

function LimitSelector(props) {
  return (
    <NavDropdown
      title={`${props.value} results `}
      id="limit-selector"
      className="mr-3"
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
