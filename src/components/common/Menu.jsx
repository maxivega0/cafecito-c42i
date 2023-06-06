import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-item nav-link' to="/" >Inicio</NavLink>
            <NavLink end className="nav-item nav-link" to="/Registro" >Registro</NavLink>
            <NavLink end className="nav-item nav-link" to="/Administrador" >Administrador</NavLink>
            <NavLink end className="nav-item nav-link" to="/Login" >Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
