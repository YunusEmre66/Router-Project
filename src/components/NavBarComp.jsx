import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const NavBarComp = () => {
  return (



      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Yunus Emre's Shop</Navbar.Brand>
          <Nav className="me-end h4">
            <Nav.Link as={NavLink} style={({isActive}) => ({color: isActive && "red"})} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => ({color: isActive && "red"})} to="/campaigns">Campaigns</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => ({color: isActive && "red"})} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive}) => ({color: isActive && "red"})} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}


export default NavBarComp