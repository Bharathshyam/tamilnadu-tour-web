import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


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
                        <Link to={'/'} className='hello m-2 py-2' id='top-c' style={{textDecoration:"none" }}>Home</Link>
                        <Link to={'/places'} className='hello m-2 py-2' id='top-c' style={{textDecoration:"none"}}>Places to visit</Link>
                        <Link to={'/besttimetovisit'} className='hello m-2 py-2' id='top-c' style={{textDecoration:"none"}}>Best Time To Visit</Link>
                      
                        <Link to={'/packages'} className='hello m-2 py-2' id='top-c' style={{textDecoration:"none"}}>Packages</Link>
                        
                        <Link to={'/food'} className='hello m-2 py-2' id='top-c' style={{textDecoration:"none"}}>Food</Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
            </div>
        
    </section>
    
  )
}

export default TopBar