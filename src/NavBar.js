import React from 'react';
import { NavLink } from 'react-router-dom'

const link = {
    width: 100,
    background: 'red',
    padding: 12,
    color: 'white',
    margin: '0,6px,6px'
  }
  
  const NavBar = () => {
    return(
      <>
        <NavLink to='/' exact style={link} activeStyle={{ background: 'blue'}} >Home</NavLink>
        <NavLink to='/about' exact style={link} activeStyle={{ background: 'blue'}} >About</NavLink>
        <NavLink to='/login' exact style={link} activeStyle={{ background: 'blue'}} >Login</NavLink>
      </>
    )
  }

  export default NavBar