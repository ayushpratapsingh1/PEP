import {Navbar, Button, Nav} from 'react-bootstrap';

function Header() {
  return (
    <Navbar className='justify-content-between bg-dark'>
        <Navbar.Brand href='#home' className='d-flex align-items-center 
        gap-2 mx-3 text-light'>
            <img src="./vite.svg" alt="" />
            <span className='fs-4 fw-bold'>Vite</span>
        </Navbar.Brand>
        <Nav className='mx-3'>
            <Nav.Link href='#mentor' className='text-white'>
                Mentorship</Nav.Link>
            <Button variant='info'>Say Hello</Button>
        </Nav>
    </Navbar>
  );
}

export default Header;