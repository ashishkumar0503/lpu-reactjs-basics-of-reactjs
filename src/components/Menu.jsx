import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import "../App.css";

const Menu = () => {
  return (
    <div>
        <Link to="/">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <br/>
        {/* <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
        <br/> */}
        <a href="/">About</a>
        <a href="/contact">Contact</a>
        <Outlet/>
    </div>
  )
}

export default Menu