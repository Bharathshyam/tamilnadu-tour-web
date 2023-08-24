import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopBar = () => {
  return (
    <section>
        <div id='top'> 
            
            <Navbar expand="lg" className="" id="topbar">
                <Container id="topbar">
                    <Navbar.Brand href="#home" id="topbar">TAMILNADU TOURISM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home" id="top-c">Home</Nav.Link>
                        <Nav.Link href="#placestovisit" id="top-c">Places to visit</Nav.Link>
                        <Nav.Link href="#home" id="top-c">Best Time To Visit</Nav.Link>
                        <Nav.Link href="#home" id="top-c">Packages</Nav.Link>
                        <Nav.Link href="#home" id="top-c">Destination</Nav.Link>
                        <Nav.Link href="#home"id="top-c">Food</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        
    </section>
    
  )
}

export default TopBar