import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Nav, Navbar } from 'react-bootstrap';

export const Header = () =>  {
  return (
    <header>
      <Navbar className="navibar" expand={true} bg="secondary">
          <Nav className="mr-auto">
              <Navbar.Brand>Centro Adopta</Navbar.Brand>
              <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
              <Nav.Link><Link to="/login">Ingresar</Link></Nav.Link>
          </Nav>
      </Navbar>

    </header>
  );
};
