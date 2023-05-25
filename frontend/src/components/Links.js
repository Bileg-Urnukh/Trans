import React from 'react'
import Box from '@mui/material/Box';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Links() {
  return (
   
    <Box bgcolor="white" flex={2}>  

    <div style={{ marginTop: 0, padding: 0 }}>
    <div style={{    
  backgroundImage: `url(${process.env.PUBLIC_URL + '/3.jpg'})`,

  backgroundRepeat: 'repeat',
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "4rem",
  height: "300px"
}}>
</div>
</div>

<div class="container">
  <div class="text-block">
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div>

<Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  



      
    </Box>
  )
}

export default Links