import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import imageKey from '../images/keyboard.jpg'

export default function Navigation() {
  const {currentUser} = useAuth()
  return (
    <Navbar expand='md' className='p-3' variant='dark' bg='dark'>
      <Navbar.Brand href='/' className='fw-bold'>
        <img 
          alt='Keyboard'
          src={imageKey}
          width='100'
          height='50'
          className='d-inline-block  mx-3'
          />{'   '}
        ToDos API</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='fw-bold'>
          
          <Link to='/Home' className='nav-link'>Home</Link>
          {currentUser && 
          <>
          <Link to='/ToDos' className='nav-link'>ToDos</Link>
          <Link to='/Categories' className='nav-link'>Categories</Link>
          </>
          }
          {!currentUser &&
          <Link to='/Login' className='nav-link'>Login</Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
