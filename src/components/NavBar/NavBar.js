
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="/logo1.png" alt="logo" id='logo' /></Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='barra' href="#home">Inicio</Nav.Link>
                                <Nav.Link className='barra' href="#link">Paletas</Nav.Link>
                                <NavDropdown title="otros productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"> Accesorios</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Pelotas
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <CartWidget />
                    <button className="login">Login</button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
