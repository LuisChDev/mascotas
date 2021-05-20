import { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar } from 'react-bootstrap';

export const Header = () =>  {
  return (
    <header>
      <Navbar bg="secondary" variant="dark">
        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
        <Nav.Link><Link to="/login">Ingresar</Link></Nav.Link>
      </Navbar>

    </header>
  );
};
