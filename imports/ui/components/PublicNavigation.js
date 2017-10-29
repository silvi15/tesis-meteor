import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const PublicNavigation = () => (
  <div>
  <Nav>
  <li>
      <NavLink to="/rol" activeClassName="active">Signup</NavLink>
  </li>
  <li>
      <NavLink to="/login" activeClassName="active">Login</NavLink> 
  </li>
  </Nav>
  </div>
);

export default PublicNavigation;
