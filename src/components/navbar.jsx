import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SampleNavbar = ({ selectedKey, handleSelect }) => {
  const handleTabSelect = (key) => {
    handleSelect(key);
  }

  return (
    <Navbar bg="transparet" variant="dark" expand="lg" className="mb-4 custom-navbar">
      <Navbar.Brand href="">Countries</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="underline" className="ms-auto" activeKey={selectedKey} onSelect={(selectedKey) => handleTabSelect(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="asia">Asia</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="europe">Europe</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SampleNavbar;