import React from "react";
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';

const Header =()=> {

    return(
        <header>
<Navbar className="navbar-style" expand="lg">
<Container>
<Navbar.Brand href="#">
<Image src="vtu_Images/logo.jpg" roundedCircle className="logo-style" />
<h6 className="logo-text"> Visveraya technological University,Belagavi</h6>
</Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">

<Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <NavDropdown title="Academic " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        <NavDropdown.Item href="#">Circulars & Notifications </NavDropdown.Item>
        <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Examination " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination Guidlines </NavDropdown.Item>
        <NavDropdown.Item href="#">Examination Application </NavDropdown.Item>
        <NavDropdown.Item href="#"> Results</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="VTU Departments " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil Engg </NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Science Engg </NavDropdown.Item>
        <NavDropdown.Item href="#"> Elctronics & communication Engg</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Staff Login " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login As Admin  </NavDropdown.Item>
      </NavDropdown>

      

    </Nav>


    </Navbar.Collapse >

</Container>
    </Navbar>
</header>
    )
}
export default Header