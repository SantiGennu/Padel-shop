
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';



function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to={"/"}><img src="/logo1.png" alt="logo" id='logo' /></NavLink>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to={'/'} className='barra'>Inicio</NavLink>
                                <NavLink to={'/categoria/paletas'} className='barra'>Paletas</NavLink>
                                <NavLink to={'/categoria/accesorios'} className='barra'>Accesorios</NavLink>
                                {/* 
                                <NavDropdown title="paletas" id="basic-nav-dropdown">
                                    <NavDropdown.Item> Head</NavDropdown.Item>
                                    <NavDropdown.Item>Wilson</NavDropdown.Item>
                                    <NavDropdown.Item>Bullpadel</NavDropdown.Item>
                                    <NavDropdown.Item>Dunlop</NavDropdown.Item>
                                    <NavDropdown.Item>Nox</NavDropdown.Item>
                                    <NavDropdown.Item>Siux</NavDropdown.Item>
                                    <NavDropdown.Item>Volt</NavDropdown.Item>

                                </NavDropdown> */}
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
